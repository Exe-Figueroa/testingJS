const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();

    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    // test('should return "Hello World!"', () => request(app)
    //   .get('/')
    //   .expect(200)
    //   .then((response) => {
    //     console.log({ response });
    //     expect(response.text).toEqual('Hello World!');
    //   }));
    // // Más fácil hacerlo con async y await
    test('should return "Hello World!"', async () => {
      const response = await request(app).get('/');
      console.log({ response });
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Hello World!');
    });
  });
});
