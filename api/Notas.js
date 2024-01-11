/** Mocking, stub y double
 * *Sirven para simular atributos, comportamientos o métodos en nuestro entorno de pruebas
 * *Dummy => Son datos ficticios y se usan para rellenar info.
 * *Fake => Simulan un objeto real y sirven para suplantar datos y comportamientos
 * *Stubs => Proveen respuestas preparadas y se pueden para simular un comportamiento
 * *Spies => Puede ser un stub pero puede recolectar info de como fue llamado
 * ?Cómo, con qué y cuántas veces fue llamado?
 * *Mocks => Stubs + Spies, a veces pueden estar ya pre-programados
 *
 */

/** 19- Spies
 * *Prueba de caja blanca:
 *  ?Se toma en cuenta el trabajo interno de la operación
 * *Prueba de caja negra:
 *  ?Solo se ingresa un valor y se evalúa la salida
 * * Para hacer la prueba se utilizará jest.fn() que permite usar fn y mocks
 */

/** 20- Configurando supertest en el API
 * *End to End => Pruebas de integración total:
 *  ?Se pruevan varias cosas a la vez para ver como funcionan entre sí incluyendo db y dependencias
 * *Integration test => pruebas a varias cosas a la vez excluyendo terceros (API, DB, etc.)
 * *Para utilizar supertest se debe configurar jest para poder usar su sintaxis.
 * *Las pruebas de integración van en carpeta aparte
 */

// En las pruebas de integración limitar alcance para evitar corromper datos de la db
