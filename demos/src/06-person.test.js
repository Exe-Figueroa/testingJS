const Person = require('./06-person');

describe('Test for Person Class', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('Facundo', 50, 1.8);
  });

  test('should return down', () => {
    /** AAA
     * * Arrange / Given => Corresponde a preparar o listar escenario de pruebas
     * * Act / when => Ejecutar o Actuar escenario
     * * Assert / then => Resolvemos nuestras hipótesis
     */

    // Arrange
    person.weight = 50;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
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
