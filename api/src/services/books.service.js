const MongoLib = require('../lib/mongo.lib');

class BooksService {
  constructor() {
    this.collection = 'books';
    this.mongoDB = new MongoLib();
  }

  async getBooks(query) {
    const books = await this.mongoDB.getAll(this.collection, query);
    return books;
  }

  createBook(newBook) {
    return this.mongoDB.create(this.collection, newBook);
  }
}

module.exports = BooksService;
