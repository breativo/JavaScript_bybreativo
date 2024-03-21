/* 
Lección 03_Strings en JavaScript
*/

// Crear cadenas de texto
let saludoConComillasSimples = 'Hola, mundo!'; // Hola mundo
let saludoConComillasDobles = "Hola, mundo!"; // Hola mundo
console.log(saludoConComillasDobles)
console.log(saludoConComillasDobles)

// Comillas anidadas
let frasesConComillasDobles = `breativo comento: "Hola mundo!"`;
let frasesConComillasSimples = "breativo comento `Hola mundo!`";
console.log(frasesConComillasDobles) // breativo comento: "Hola mundo!"
console.log(frasesConComillasSimples) // breativo comento `Hola mundo!`

// Concatenación de String
// Con el operador +
let string = "Hola " +"mundo!";
console.log(string); // Hola mundo!

// Con variables
let stringEnd = "mundo!";
string = "Hola "+ stringEnd; // Hola mundo!
console.log(string) // Holamundo!

// Método .concat
string = "Hola " .concat("mundo!");
console.log(string); // Hola mundo!

// Interpolación de Strings
let name= "breativo";
string = `Hola ${name}`;
console.log(string); // Hola breativo

/*
Acceder a elementos de un string
*/
// Acceso por Índice
string = `Hola mundo`;
console.log(string[0]); // H
console.log(string[ 5]); // m
console.log(string[20]); // undefined

// Acceso por método (charAt())
string = "Hola mundo";
console.log(string.charAt(0)); // "H"
console.log(string.charAt(5)); // "m"
console.log(string.charAt(20)); // ""

// Acceso a caracteres desde el final
string = "Hola mundo";
console.log(string[string.length -1]); // o
console.log(string[string.length-2]);  // d
console.log(string[string.length -20]); // undefined

/*
Métodos para manejar String
*/

string = "Hola mundo";

// includes
console.log(string.includes("mundo")); // true

// indexOf
console.log(string.indexOf("mundo")); //  5

// lastIndexOf
console.log(string.lastIndexOf("o")); // 9

// replace
console.log(string.replace("Hola", "Adiós")); // Adiós mundo

// replaceAll
let newString = "Ana lava lana";  
console.log(newString.replaceAll("a", "o")); // Ano lovo lono

// slice
console.log(string.slice(0, 4)); // Hola

// splice
console.log(string.split(" ")); // ["Hola", "mundo"]

// substring
console.log(string.substring(5,10)); // mundo

// toLowerCase
console.log(string.toLocaleLowerCase()); // HOLA MUNDO

//toUpperCase
console.log(string.toUpperCase()); // hola mundo

newString = "         Hola mundo       ";

// trim
console.log(newString.trim()); // "Hola mundo"

// trimStart
console.log(newString.trimStart()); // "Hola mundo     "

// trimEnd
console.log(newString.trimEnd()); // "      Hola mundo"