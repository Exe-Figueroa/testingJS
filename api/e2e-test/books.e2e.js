const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config/index');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let DB = null;
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);

    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    DB = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await DB.collection('books').deleteMany({});
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return bookList"', async () => {
      // Arrange
      const seedData = await DB.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1234,
          author: 'Facundo',
        },
        {
          name: 'Book2',
          year: 1235,
          author: 'Facundo',
        },
        {
          name: 'Book3',
          year: 1236,
          author: 'Facundo',
        },
        {
          name: 'Book4',
          year: 1237,
          author: 'Facundo',
        },
      ]);
      // Act
      const response = await request(app).get('/api/v1/books');
      expect(response.status).toBe(200);
      console.log(response.body);
      console.log({ seedData });
      // Assert
      // expect(response.status).toEqual(200);
      expect(response.body.length).toEqual(seedData.insertedCount );
    });
  });
});
