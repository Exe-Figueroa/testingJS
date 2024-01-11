const { faker } = require('@faker-js/faker');

const generateBook = () => ({
  _id: faker.string.nanoid(), // ptL0KpX_yRMI98JFr6B3n
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const generateManyBooks = (amount) => {
  const limit = amount || 10;
  const bookList = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < limit; i++) {
    const fakeBook = generateBook();
    bookList.push(fakeBook);
  }

  return bookList;
};

module.exports = { generateBook, generateManyBooks };
