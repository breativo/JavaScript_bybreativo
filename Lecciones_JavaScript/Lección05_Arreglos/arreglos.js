/*
Arreglos en JavaScript
*/

// Declarar arreglos en JavaScript

let miArreglo = ["a","b","c","d","e"];
console.log(miArreglo); // [ 'a', 'b', 'c', 'd', 'e' ]

let miArregloVacio = [];
console.log(miArregloVacio); // [] 

let nuevoArreglo = new Array ("a","b","c","d","e");
console.log(nuevoArreglo); // [ 'a', 'b', 'c', 'd', 'e' ]

// Acceso a elementos de un arreglo
miArreglo = ["a","b","c","d","e"];

let primerElemento = miArreglo[0];
console.log(primerElemento); // a
let segundoElemento =miArreglo[1]; 
console.log(segundoElemento); // b
let ultimoElemento = miArreglo[miArreglo.length -1];
console.log(ultimoElemento); // e

// Acceso a elementos a través de for
for (let i = 0; i < miArreglo.length; i++) {
    console.log(miArreglo[i]); // Imprime cada elemento del arreglo
}

// Acceso a elementos a través de forEach
miArreglo.forEach(function(elemento) {
    console.log(elemento); // Imprime cada elemento del arreglo
});

// Acceso a elementos a través de métodos
// indexOf()
let colores =["azul", "amarillo", "rojo", "verde"];
let indiceAmarillo = colores.indexOf("amarillo");
console.log(indiceAmarillo) // 1
let indiceVerde = colores.indexOf("verde");
console.log(indiceVerde); // 3

//find()
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let primerNumeroDespuesDe = numeros.find(num => num >70);
console.log(primerNumeroDespuesDe); // 80

// filter()
let numerosMayoresDe = numeros.filter(num => num >70);
console.log(numerosMayoresDe); // [ 80, 90 ]

// findIndex()
colores =["azul", "amarillo", "rojo", "verde"];
let indicePrimerAmarillo =colores.findIndex(color => color === "amarillo");
console.log(indicePrimerAmarillo); // 1
let indicePrimerRojo =colores.findIndex(color => color === "rojo");
console.log(indicePrimerRojo); // 2

// includes()
numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let hayNumero = nuemros.includes(10);
console.log(hayNumero); // true
hayNumero = nuemros.includes(0);
console.log(hayNumero); // false

// slice()
numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let rangoNumeros = numeros.slice(3,7);
console.log(rangoNumeros); // [ 40, 50, 60, 70 ]

// Acceso a elementos anidados
let arregloAnidado = [[1, 2], [3, 4], [5, 6]];
let segundoElementoPrimerArreglo = arregloAnidado[0][1]; 
console.log(segundoElementoPrimerArreglo); // 2

// Métodos para trabajar con arreglos
// push()
let nuevoNumeros = [1, 2, 3];
console.log(nuevoNumeros); // [ 1, 2, 3 ]
nuevoNumeros.push(4);
nuevoNumeros.push(5);
console.log(nuevoNumeros); // [ 1, 2, 3, 4, 5 ]

// pop()
let eliminarUltimoelemento = nuevoNumeros.pop();
console.log(eliminarUltimoelemento); // 5
console.log(nuevoNumeros); // [ 1, 2, 3, 4 ]

// unshift()
let otrosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

otrosNumeros.unshift(101);
console.log(otrosNumeros); // [ 101, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
otrosNumeros.unshift(100);
console.log(otrosNumeros); // [ 100, 101, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

// shift()
let eliminarNumero = otrosNumeros.shift();
console.log(eliminarNumero); // 100
console.log(otrosNumeros); // [ 101, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

// forEach()
otrosNumeros.forEach(function(numero){
    console.log(numero)
}); // Itera los elementos del arreglo

// map()
let doble = otrosNumeros.map(function(numero){
    return numero * 2;
});
console.log(doble); // [ 202, 2, 4, 6, 8, 10, 12, 14, 16, 18, 0 ]

// filter()
let numerosPares= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let pares =numerosPares.filter(function(numneros){
    return numero % 2 === 0;
})
console.log(pares); // [ 2, 4, 6, 8, 0 ]

// indexOf()
let indiceDos = pares.indexOf(2);
console.log(indiceDos); // 0
let indiceOcho = pares.indexOf(8);
console.log(indiceOcho); // 3

// includes()
numeros = [ 1, 2, 3, 4, 5]
let incluyeCinco = numeros.includes(5);
console.log(incluyeCinco); // true

let incluyeDiez = numeros.includes(10);
console.log(incluyeDiez); // false

// some()
numeros = [ 1,3,5,6,7,9];
let algunPar = numeros.some(function(numero){
    return numero % 2 === 0;
});
console.log(algunPar); // true

let mayorQue = numeros.some(function(numero){
    return numero > 10;
});
console.log(mayorQue); // false