/*
Lección 04_Números en JavaScript
*/

// Números enteros
let entero = 10;
console.log(entero); // 10

// Decimales
let decimales = 3.14;
console.log(decimales); // 3.14

// Enteros seguros
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Infinity y -infinity
let dividirPorCero = 1 / 0; // Infinity
let negativoDividirPorCero = -1 / 0; // -Infinity
console.log(dividirPorCero, negativoDividirPorCero);

// NaN
let resultadoNaN = 0 / 0; // NaN
let noEsUnNumero = "texto" * 2; // NaN
console.log(resultadoNaN, noEsUnNumero)

// Operaciones con números
// suma
let suma = 10 + 5;
console.log(suma); // 15

// resta
let resta = 10 - 5;
console.log(resta); // 5

// multiplicar
let multiplicar = 10 * 5;
console.log(multiplicar) ;// 50

// dividir
let dividir = 10 / 5;
console.log(dividir);// 2

// operaciones con variables
let a = 10, b=5;

let sumaVariables = a + b;
let restaVariables = a - b;
let mutiplicarVariables = a * b;
let dividirVariables = a/ b;
console.log(
    sumaVariables,
    restaVariables,
    multiplicacionVariables,
    dividirVariables
); // 15, 5, 50, 2

// Operaciones complejas
// Redondear un número
let redondear = Math.round(4.7);
console.log(redondear); // 5
let redondearVariable= 7.2;
console.log(Math.round(redondearVariable)); // 7


// Número maximo de una secuencia
let maximo = Math.max(10,20,30,40,50,60,65,70,80,90,101);
console.log(maximo); //101

// Conversión y Parsing
// Convertiat a 
let conversion = +"21";
console.log(typeof(conversion));// number

let numero = "21";
console.log(typeof(numero)); // string
let conversionNumero = +numero;
console.log(typeof(conversionNumero)); // number

// Parsing con números enteros
let enteroDesdeString = parseInt("123");
console.log(enteroDesdeString); // 123 (como número)
let enteroDesdeHex = parseInt("0xFF");
console.log(enteroDesdeHex); // 255 (como número, desde hexadecimal)

// Parsing con números decimales
let flotanteDesdeString = parseFloat("123.456");
console.log(flotanteDesdeString); // 123.456 (como número de punto flotante)


// Especificidades
console.log(0.1 + 0.2 == 0.3); // false debido a la precisión de punto flotante
console.log(0.1 + 0.2 === 0.3); // false, misma razón
console.log((0.1 + 0.2).toFixed(1) == 0.3); // true, después de corregir a un decimal

// Métodos para manejar números
// Métodos number
// Number.isFinite(value)
console.log(Number.isFinite(2));  // true
console.log(Number.isFinite(Infinity)); // false 

// Number.isInteger(value)
console.log(Number.isInteger(5)) // true
console.log(Number.isInteger(5.5)) // false

// Number.parseFloat y Number.parseInt
console.log(Number.parseFloat("10.5"));  // 10.5
console.log(Number.parseInt("10.5"));    // 10

// Métodos de instancias de números

numero = 1234.567890;

// toFixed()
console.log(numero.toFixed(2)) // 1234.56 ( 2 decimales)
console.log(numero.toFixed(3)) // 1234.567 (3 decimales)

// toPrecision()
console.log(numero.toPrecision(6)); //1234.56 (6 digitos)

// Métodos del objeto Math
// Math.abs()
console.log(Math.min.abs(-10)); // 10

// Math.ceil()
console.log(Math.ceil(10.2)); // 11
