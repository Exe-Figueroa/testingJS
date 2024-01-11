const BooksService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter y la Piedra Filosofal',
  },
  {
    _id: 2,
    name: 'Harry Potter y la Cámara de los Secretos',
  },
  {
    _id: 3,
    name: 'Harry Potter y el Prisionero de Azkaban',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => { },
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub)); // Hacemos una suplantación del archivo cuando es llamado

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks(); // Limpia los mocks p/c/caso prueba p/no usar los mismos valores
  });

  describe('Test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange

      // Act
      const books = await service.getBooks();
      console.log({ books });
      // Assert
      expect(books.length).toEqual(3);
    });

    test('should return a first book name', async () => {
      // Arrange

      // Act
      const books = await service.getBooks();
      console.log('book 1 ->', books[0].name);
      // Assert
      expect(books[0].name).toEqual('Harry Potter y la Piedra Filosofal');
    });
  });
});
