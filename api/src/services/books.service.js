const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books';
    this.mongoDB = new MongoLib(); // Vamos a hacer mocking para no usar la dependencia
  }

  async getBooks(/* query */) {
    const books = await this.mongoDB.getAll(this.collection, {}); // TODO: reemplazar obj por query
    /**
     * *La query es opcional
     * *Por si quiero especificar lo que quiero traer de la db.
     * *IDs específicos, autores, etc.
     */
    return books;
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
