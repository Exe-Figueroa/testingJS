const BooksService = require('./books.service');
const { generateManyBooks } = require('../fakes/book.fake');

const mockSpyGetAll = jest.fn();

// Igualamos getAll al espía
/** Qué vamos a hacer?
 * *De acuerdo a cada prueba vamos a inyectar valores y vamos a ver los valores que llamó
 */

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => { },
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // Limpia los mocks p/c/caso prueba p/no usar los mismos valores
  });

  describe('Test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(8);
      // mockSpyGetAll.mockReturnValue(fakeBooks); // Retorna de manera directa.
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Resuelve como una promesa (Sirve para async fn()).
      // Act
      const books = await service.getBooks({});
      console.log({ books });
      // Assert
      expect(books.length).toEqual(fakeBooks.length);

      // Espiamos controlando si el espía fue llamado y si fué llamado con un parámetro específico
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1); // Para saber cuántas veces fue llamada
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {}); // En este caso con la collection y un obj vacío
    });

    test('should return a first book name', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log('book 1 in list ->', books[0].name);
      // Assert
      expect(books[0].name).toEqual(books[0].name);
    });
  });
});
