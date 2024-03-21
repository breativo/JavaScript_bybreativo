/*
Lección 02_Variables en JavaScript
*/

// Declaración de variables
let name;

// Asignación de variables
let lastName = `breativo`;
console.log(lastName); // breativo

// Redeclaradas variables
let course = `JavaScript`;
// let course = `Python` no se permite la redeclaración de una variable
course = `Python` ;// si se permite la reasignación de una variable (JavaScript -> Python)

// Declaración de constantes
const NAME = `breativo`;

// Tipos de datos primitivos
// Cadenas de texto
let string = "breativo"; // se permite las comillas dobles
let newString = `breativo`; // o las comillas simples
console.log(string); // breativo
console.log(newString); // breativo

// Números
let year = 2024; 
console.log(year) // 2024

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
let person={
    name : `breativo`,
    age : 43,
    isJavaScript : true
};
console.log(person) // { name: 'breativo', age: 43, isJavaScript: true }
console.log(person.name); // breativo

// Array
let skill=[`Java`, `JavaScript`, `Python`];
console.log(skill[1]) // javaScript
console.log(skill[2]) // Python

// Function
function sum (a, b){
    return a+b
}
console.log(sum(2,3))  // 5
console.log(sum(12,30)) // 42

// Date 
let currentDate =new Date();
console.log(currentDate) // 2024-03-21T17:51:57.094Z

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


