// Creamos un mock para no usar la DB
const mockSpyGetAll = jest.fn();

const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake');
const createApp = require('../src/app');


jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => { },
})));


describe('Test for books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();

    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return bookList"', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(8);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const response = await request(app).get('/api/v1/books');
      console.log({ fakeBooks, body: response.body });
      // expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
