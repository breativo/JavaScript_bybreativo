/*
Sets y Maps en JavaScript
*/

/*
Sets en JavaScript
*/

// Declarar Sets en JavaScript

const miSet=new Set();
console.log(miSet); // Set(0) {}

const  newSet = new Set(['rojo', 'azul', 'verde', 'amarillo']);
console.log(newSet); //Set(4) { 'rojo', 'azul', 'verde', 'amaillo' }


// Métodos para trabajar con sets en JavaScript
// Añadir elemento en set

newSet.add('blanco');
console.log(newSet); // Set(5) { 'rojo', 'azul', 'verde', 'amaillo', 'blanco' }

newSet.add('negro');
newSet.add('naranja');
newSet.add('marrón');
console.log(newSet); 
/* Set(8) {
    'rojo',
    'azul',
    'verde',
    'amarillo',
    'blanco',
    'negro',
    'naranja',
    'marrón'
}*/

// Eliminar elemento en set

newSet.delete('blanco');
console.log(newSet);
/* Set(7) {
    'rojo',
    'azul',
    'verde',
    'amarillo',
    'negro',
    'naranja',
    'marrón'
}*/

newSet.delete('negro'); // true
newSet.delete('naranja'); // true
newSet.delete('marrón'); // true
console.log(newSet); // Set(4) { 'rojo', 'azul', 'verde', 'amarillo' }

newSet.delete('blanco'); // false, no existe no realza la operación
console.log(newSet); // Set(4) { 'rojo', 'azul', 'verde', 'amarillo' }

// Comprobar si disponemos de un elemento en el set

newSet.has('rojo'); // true
newSet.has('blanco'); // false

let existeColor = newSet.has('rojo');
console.log(existeColor); // true
existeColor = newSet.has('Blando');
console.log(existeColor); // false

// Comprobar tamaño de un set

newSet.size;
console.log(newSet.size);  // 4
let sizeSet = newSet.size;
console.log(sizeSet);      // 4

// Limpiar elementos del set, dejar vacío set

console.log(newSet); // Set(4) { 'rojo', 'azul', 'verde', 'amarillo' }
newSet.clear();
console.log(newSet);  // Set(0) {}


// Solución al ejercicio practico
// 1. Crear un Set vacío
const ciudades = new Set();

// 2. Añadir ciudades
ciudades.add("Madrid");
ciudades.add("Barcelona");
ciudades.add("Valencia");
ciudades.add("Bilbao");

// 3. Mostrar el Set por consola
console.log("Ciudades actuales en el Set:", ciudades);

// 4. Añadir otra ciudad
ciudades.add("Sevilla"); // Añade aquí la ciudad que prefieras

// 5. Eliminar la "primera" ciudad del Set
ciudades.delete('Madrid');

// 6. Comprobar si la ciudad eliminada existe
console.log("¿Existe Madrid en el Set?", ciudades.has("Madrid"));

// 7. Iterar los elementos con un for...of
for (let ciudad of ciudades) {
  console.log(ciudad);
}

// 8. Vaciar el Set
ciudades.clear();

// 9. Mostrar el Set vacío por consola
console.log("Estado final del Set:", ciudades);


/*
Maps en JavaScript
*/

// Declarar Maps en JavaScript

const map = new Map();

const miMap= new Map([  ['nombre',  'breativo'], 
                        [ 'lenguaje', 'JavaScript'],
                        ['valorCurso', 10]]);
console.log(miMap);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'valorCurso' => 10
}
*/


// Añadir y actualizar  un par clave-valor

miMap.set('precio', 0);
miMap.set('anio' , 2024);
console.log(miMap);
/*
Map(5) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'valorCurso' => 10,
  'precio' => 0,
  'anio' => 2024
}
*/

miMap.set('lenguaje', 'Python');
console.log(miMap);
/*
Map(5) {
  'nombre' => 'breativo',
  'lenguaje' => 'Python', // actualizamos el valor del campo lenguaje
  'valorCurso' => 10,
  'precio' => 0,
  'anio' => 2024
}
*/

// Encadenamos set (no recomendado)

map.set('nombre', 'breativo')
    .set('lenguaje', 'JavaScript')
    .set('valorCurso', 10)
    .set('precio', 0)
    .set('anio', 2024);
console.log(map);
/*
Map(5) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'valorCurso' => 10,
  'precio' => 0,
  'anio' => 2024
}
*/

// Obtener valor asociado a clave
console.log(map.get('nombre')); // breativo

let nombre = map.get('nombre'); // breativo
console.log(nombre);

// Comprobar si existe la clave
console.log(map.has('nombre'))     // true
console.log(map.has('apellidos')) // false

let existe = map.has('nombre');
console.log(existe); // true

if(map.has('nombre')){
    console.log('Existe') // Existe
} else{
    map.set('nombre', '')
};

// Eliminar par clave-valor
map.delete('precio');
map.delete('valorCurso');

console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'anio' => 2024
}
*/

// Tamaño del Map
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'anio' => 2024
}
*/
console.log(map.size); // 3

// Vaciar un map

map.clear();
console.log(map); // Map(0) {}

// Interación en los elementos de un map
console.log(miMap);
/*
Map(5) {
  'nombre' => 'breativo',
  'lenguaje' => 'Python',
  'valorCurso' => 10,
  'precio' => 0,
  'anio' => 2024
}
*/

// for...of
for (let [clave, valor] of miMap) {
    console.log(`${clave}: ${valor}`);
}
/*
nombre: breativo
lenguaje: Python
valorCurso: 10
precio: 0
anio: 2024
*/

for (let clave of miMap.keys()) {
    console.log(clave);
}
/*
nombre
lenguaje
valorCurso
precio
anio
*/

for (let valor of miMap.values()) {
    console.log(valor);
}
/*
breativo
Python
10
0
2024
*/

// forEach
miMap.forEach((valor, clave) => {
    console.log(`${clave}: ${valor}`);
});
/*
nombre: breativo
lenguaje: Python
valorCurso: 10
precio: 0
anio: 2024
*/

// Método Keys(), values(), entries()
// keys()
const claves = miMap.keys();
for (let clave of claves) {
  console.log(clave);
}
/*
nombre
lenguaje
valorCurso
precio
anio
*/

// values()
const valores = miMap.values();
for (let valor of valores) {
  console.log(valor);
}
/*
breativo
Python
10
0
2024
*/

// entries()
const entradas = miMap.entries();
for (let [clave, valor] of entradas) {
  console.log(`${clave}: ${valor}`);
}
/*
nombre: breativo
lenguaje: Python
valorCurso: 10
precio: 0
anio: 2024
*/