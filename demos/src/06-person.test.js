const Person = require('./06-person');

describe('Test for Person Class', () => {
  let person;
  beforeEach(() => {
    person = new Person('Facundo', 50, 1.8);
  });

  test('should return down', () => {
    person.weight = 50;
    expect(person.calcIMC()).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 70;
    expect(person.calcIMC()).toBe('normal');
  });
  
  test('should return overweight', () => {
    person.weight = 100;
    expect(person.calcIMC()).toBe('overweight level 2');
  });
});
