/*
Lección 02_Variables en JavaScript
*/

// Declaración de variables
let nombre;

// Asignación de variables
let nombreCompleto = `breativo`;
console.log(nombreCompleto); // breativo

// Redeclaradas variables
let curso = `JavaScript`;
// let course = `Python` no se permite la redeclaración de una variable
curso = `Python` ;// si se permite la reasignación de una variable (JavaScript -> Python)

// Declaración de constantes
const NOMBRE = `breativo`;

// Tipos de datos primitivos
// Cadenas de texto
let string = "breativo"; // se permite las comillas dobles
let newString = `breativo`; // o las comillas simples
console.log(string); // breativo
console.log(newString); // breativo

// Números
let anio = 2024; 
console.log(anio) // 2024

// Boolean
let isJavaScript = true;  
console.log(isJavaScript); // true

// Undefined
let undefinedString; 
console.log(undefinedString); //Undefined

// Null
let nullString = null; 
console.log(nullString);// null


// Datos de datos no primitivos
// Object
let persona={
    nombre : `breativo`,
    edad : 43,
    isJavaScript : true
};
console.log(persona) // { name: 'breativo', age: 43, isJavaScript: true }
console.log(persona.nombre); // breativo

// Array
let lenguajes=[`Java`, `JavaScript`, `Python`];
console.log(lenguajes[1]) // javaScript
console.log(lenguajes[2]) // Python

// Function
function sum (a, b){
    return a+b
}
console.log(sum(2,3))  // 5
console.log(sum(12,30)) // 42

// Date 
let diaSistema =new Date();
console.log(diaSistema) // 2024-03-21T17:51:57.094Z

// typeof
console.log(typeof "Hola, mundo"); // "string"
console.log(typeof 5); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (esto es considerado un error histórico en JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (los arreglos son un tipo especial de objeto)
console.log(typeof function(){}); // "function"
console.log(typeof Symbol("id")); // "symbol" (introducido en ES6)
console.log(typeof BigInt(9007199254740991)); // "bigint" (introducido en ES2020)


