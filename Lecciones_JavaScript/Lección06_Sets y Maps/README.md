![JavaScript by breativo](/img/titulo.png)

## ${{\color{#ffcc66}Trabajar\ con\ Sets\ en\ JavaScript}}$

### ${{\color{#ffcc66}Trabajar\ con\ Sets\ en\ JavaScript.}}$

Los Sets en JavaScript ofrecen una manera eficiente de manejar colecciones de valores únicos, eliminando automáticamente los duplicados y proporcionando operaciones que no están directamente disponibles en los arrays tradicionales. A continuación, se profundiza en algunos aspectos detallados y técnicos de los Sets en JavaScript.

### ${{\color{#ffcc66}Características\ detalladas\ de\ los\ Sets\ en\ JavaScript.}}$


- Unicidad de elementos: Los Sets se aseguran de que cada valor sea único dentro de la colección. Si intentas añadir un valor que ya existe en el Set, este no se añadirá de nuevo, lo cual es útil para mantener listas de elementos sin duplicados sin necesidad de comprobar manualmente si un elemento ya existe antes de añadirlo.

- Valores, no índices: A diferencia de los arrays, los elementos de un Set no se acceden mediante índices. Los Sets mantienen el orden de inserción de los elementos, lo que significa que puedes iterar sobre los elementos en el orden en que fueron añadidos, pero no puedes acceder a un elemento específico por su posición.

- Eficiencia en operaciones específicas: Los Sets están optimizados para ciertas operaciones como la adición de elementos, la eliminación, y la comprobación de existencia (add, delete, has), las cuales pueden ser más eficientes en comparación con operaciones equivalentes en arrays, especialmente para colecciones grandes.


### ${{\color{#ffcc66}Creación\ de\ un\ Sets\ en\ JavaScript.}}$

Para crear un Set, puedes utilizar el constructor Set(). Puedes iniciar un Set vacío o pasar un iterable (como un array) para inicializar el Set con esos elementos.

```JavaScript
// Creación de set vacío
const miSet = new Set(); 

// Creación de set con elementos
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul']);
console.log(miSetColores); 
 /* Set(4) {
  'rojo',
  'verde',
  'amarillo',
  'azul'}       
  */  
 
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul', 'rojo', 'verde']);
console.log(miSetColores);  // el resultado es el mismo, 'rojo' y 'verde' no se repiten
 /* Set(4) {
  'rojo',
  'verde',
  'amarillo',
  'azul'}       
  */          
```
<br>


### ${{\color{#ffcc66}Métodos\ para \ trabajar\ un\ Sets\ en\ JavaScript.}}$


 - .add(valor): Añade un valor al Set. Si el valor ya existe, no se realiza ninguna operación. Este método modifica el Set sobre el cual se llama y devuelve el propio Set, permitiendo encadenar llamadas.

```JavaScript
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul']);
console.log(miSetColores); 
/* Set(4) {
  'rojo',
  'verde',
  'amarillo',
  'azul'}       
  */  

 miSetColores.add ('blanco');
 console.log(miSetColores); 
/* Set(5) {
  'rojo',
  'verde',
  'amarillo',
  'azul',
  'blanco'}       
  */ 
```
<br>

- .delete(valor): Elimina un valor específico del Set. Devuelve true si el valor existía y fue eliminado, o false si el valor no fue encontrado.

```JavaScript
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul']);
console.log(miSetColores); 
/* Set(4) {
  'rojo',
  'verde',
  'amarillo',
  'azul'}       
  */  
 miSetColores.delete('rojo');
 console.log(miSetColores);
 /*
 Set(3) {
  'verde',
  'amarillo',
  'azul'}
  */
```
<br>

- .has(valor): Comprueba si un valor especificado existe en el Set. Devuelve true si el valor existe, de lo contrario, false.

```JavaScript
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul']);
miSetColores.has('rojo');  // true
miSetColores.has('blanco'); // false
```
<br>

- .clear(): Elimina todos los elementos del Set.

```JavaScript
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul']);
miSetColores.clear;
console.log(miSetColores); 
/*
Set(0) {}
*/
```
<br>

- .size: Propiedad que devuelve el número de elementos presentes en el Set. A diferencia de los arrays, no es un método, sino una propiedad de solo lectura.

```JavaScript
const miSetColores = new Set (['rojo', 'verde', 'amarillo', 'azul']);
miSetColores.size; // 4
```
<br>

### ${{\color{#ffcc66}Interación\ para \ manejar\ elementos\ de\ los\ Sets\ en\ JavaScript.}}$

Los Sets son iterables y pueden ser recorridos usando for...of o el método .forEach() similar a los arrays.

- El bucle for...of te permite recorrer los valores de un Set directamente:

```JavaScript
const colores = new Set(['rojo', 'azul', 'verde', 'amarillo']);

for (let color of colores) {
    console.log(color);
}

```
<br>

- El método .forEach() es otra manera de iterar sobre los elementos de un Set. Acepta una función callback que se ejecuta para cada elemento del Set.

```JavaScript
const colores = new Set(['rojo', 'azul', 'verde', 'amarillo']);

colores.forEach(color => {
    console.log(color);
});
/*
'rojo'
'azul'
'verde'
'amarillo'
*/
```
<br>

 Además, los Sets tienen los métodos .keys(), .values(), y .entries(), los cuales son heredados de su prototipo y permiten más formas de iteración:

- .values(): Devuelve un nuevo objeto Iterator que contiene los valores para cada elemento en el orden de inserción.
```JavaScript
const colores = new Set(['rojo', 'azul', 'verde', 'amarillo']);
for (let valor of colores.values()) {
    console.log(valor);
}
/*
'rojo'
'azul'
'verde'
'amarillo'
*/
```
<br>

- .keys(): En el contexto de un Set, este método es un alias para .values(), ya que no hay claves en un Set.

```JavaScript
const colores = new Set(['rojo', 'azul', 'verde', 'amarillo']);
for (let clave of colores.keys()) {
    console.log(clave);
}
/*
'rojo'
'azul'
'verde'
'amarillo'
*/
```
<br>

- .entries(): Devuelve un nuevo objeto Iterator que contiene un array de [valor, valor] para cada elemento en el Set, en el orden de inserción. Esto es para mantener la interfaz compatible con el objeto Map, aunque en el caso de los Sets, la clave y el valor son iguales.

```JavaScript
const colores = new Set(['rojo', 'azul', 'verde', 'amarillo']);
for (let entrada of colores.entries()) {
    console.log(entrada);
}
/*
[ 'rojo', 'rojo' ]
[ 'azul', 'azul' ]
[ 'verde', 'verde' ]
[ 'amarillo', 'amarillo' ]*/
```
<br>

Una de las utilidades de Set es eliminar duplicados de un array de forma eficiente. Puedes convertir un array en un Set y luego, si es necesario, volver a convertir ese Set en un array.

```JavaScript
const numerosConDuplicados = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 0, 0];
console.log(numerosConDuplicados); // Array con todos los números

const numerosUnicos = new Set(numerosConDuplicados);
console.log(numerosUnicos); // Set sin números duplicados

const arraySinDuplicados = Array.from(numerosUnicos);
console.log(arraySinDuplicados); // Array sin números duplicados
console.log(typeof(arraySinDuplicados));


```
<br>

> [!TIP]
> ### Ejercicio practico.
> Este ejercicio práctico te permitirá familiarizarte con varias operaciones fundamentales que puedes realizar con los objetos Set en JavaScript, incluyendo la creación de un Set, la adición y eliminación de elementos, la verificación de la existencia de un elemento, la iteración a través de los elementos del Set, y finalmente, vaciar completamente el Set. A continuación, te guiaré paso a paso a través del ejercicio, incluyendo las mejoras sugeridas:
> Descripción del ejercicio:
> 
> - Creación de un Set vacío con el nombre ciudades: Inicias creando un Set vacío donde almacenarás nombres de ciudades.
> - Añadir ciudades: Añades inicialmente las ciudades "Madrid", "Barcelona", "Valencia", y "Bilbao" al Set.
> - Mostrar el Set por consola: Muestras el contenido actual del Set por consola para verificar las ciudades añadidas.
> - Añadir otra ciudad: Añades una ciudad adicional de tu elección al Set.
> - Eliminar la primera ciudad del Set: Eliminas la primera ciudad que se añadió al Set. Aquí hay que tener en cuenta que los Set en JavaScript no mantienen un orden fijo ni permiten el acceso a los elementos por índice, por lo que la "primera ciudad" es un concepto ambiguo. Sin embargo, para este ejercicio, simularás este comportamiento iterando y eliminando el primer elemento encontrado.
> - Comprobar si la ciudad eliminada existe: Verificas si la ciudad eliminada aún existe en el Set usando el método .has().
> - Iterar los elementos con un for...of: Iteras a través de los elementos del Set usando un bucle for...of para mostrar cada ciudad.
> - Vaciar el Set: Vacías completamente el Set.
> - Mostrar el Set vacío por consola: Muestras el estado final del Set por consola para confirmar que está vacío.

<br>

## ${{\color{#ffcc66}Trabajar\ con\ Maps\ en\ JavaScript}}$

### ${{\color{#ffcc66}Trabajar\ con\ Maps\ en\ JavaScript.}}$


Los objetos Map en JavaScript son colecciones de pares clave-valor en las que puedes almacenar elementos únicos, identificados por una clave. A diferencia de los objetos, que tienen claves que son siempre strings o símbolos, en un Map, las claves pueden ser de cualquier tipo, incluyendo funciones, objetos, o cualquier otro tipo primitivo.


### ${{\color{#ffcc66}Características\ de\ los\ Maps\ en\ JavaScript.}}$

- Las claves son únicas: cada clave solo puede aparecer una vez en el Map.

- El orden de inserción de los elementos se mantiene, lo que significa que cuando iteras sobre un Map, los elementos se retornarán en el orden en que fueron agregados.

- El rendimiento de las operaciones clave-valor (insertar y eliminar) es consistentemente rápido, independientemente del tamaño del Map.
- 
### ${{\color{#ffcc66}Creación\ de\ los\ Maps\ en\ JavaScript.}}$

Puedes crear un Map vacío o con algunos elementos ya inicializados.

```JavaScript
// Map vacío
const map = new Map();

// Map con valores inicializados
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'país' => 'España'
  }
}
```
<br>

### ${{\color{#ffcc66}Métodos\ principales\ de\ los\ Maps\ en\ JavaScript.}}$

- .set(clave, valor): Añade o actualiza un par clave-valor.

```JavaScript

// Añadir nuevos elementos
const map = new Map();
map.set('nombre' , 'breativo');
map.set('lenguaje', 'JavaScript');
map.set('pais' , 'España');
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'país' => 'España'
  }
}
*/

// Modificar elementos
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'país' => 'España'
  }
}
*/
map.set('lenguaje' , 'Python');
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'Python',
  'país' => 'España'
}
*/

// Encadenar métodos set
// Este enfoque realiza lo mismo que el primer ejemplo, pero de una manera más concisa.
const map = new Map();
map.set('nombre' , 'breativo')
    .set('lenguaje', 'JavaScript')
    .set('pais' , 'España');
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'país' => 'España'
  }
}
*/
```
<br>

- .get(clave): Obtiene el valor asociado a la clave.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

console.log(map.get('nombre'));    // breativo
console.log(map.get('apellidos')); // undefined

```
<br>

- .has(clave): Retorna true si la clave existe en el Map.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

console.log(map.has('nombre')); // true
console.log(map.has('apellidos')); // false

// Uso de has en condicionales
if (map.has('nombre')) {
  console.log(`Continuamos con el curso JavaScript by "${map.get('nombre')}"`); // Continuamos con el curso JavaScript by "breativo
} else {
  console.log('Dejamos el curso JavaScript by breativo');
}

```
<br>

- .delete(clave): Elimina el par clave-valor por la clave dada.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

map.delete('pais'); // true
console.log(map);
/*
Map(2) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
*/


```
<br>

- .clear(): Elimina todos los pares clave-valor del Map.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);
console.log(map);
/*
Map(3) {
  'nombre' => 'breativo',
  'lenguaje' => 'JavaScript',
  'país' => 'España'
}
*/
map.clear();
console.log(map);
/*
Map(0){}
*/
```
<br>

- .size: Propiedad que retorna el número de elementos en el Map.
```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);
console.log(map.size) // 3

const newMap = new Map();
console.log(newMap.size);  // 0
```
<br>

### ${{\color{#ffcc66}Interación\ para \ manejar\ elementos\ de\ los\ Maps\ en\ JavaScript.}}$

- El bucle for...of para iterar directamente sobre las entradas de un Map. Esto te permite acceder tanto a las claves como a los valores.

```JavaScript

const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

for (let [clave, valor] of map) {
  console.log(`${clave}: ${valor}`);
}
/*
nombre: breativo
lenguaje: JavaScript
país: España
*/

for (let clave of map.keys()) {
  console.log(clave);
}
/*
nombre
lenguaje
país
*/

for (let valor of map.values()) {
  console.log(valor);
}
/*
breativo
JavaScript
España
*/
```
<br>

- El método .forEach() te permite ejecutar una función sobre cada elemento del Map. A la función se le pasan el valor, la clave y el propio mapa como argumentos.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

map.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});
/*
nombre: breativo
lenguaje: JavaScript
país: España
*/
```
<br>

Los Maps proveen estos tres métodos para obtener iteradores que puedes usar para recorrer las claves, valores, o ambos.

- .keys() devuelve un nuevo objeto Iterator que contiene las claves del Map en el orden de inserción.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

const claves = map.keys();
for (let clave of claves) {
  console.log(clave);
}
/*
nombre
lenguaje
país
*/
```
<br>

- .values() devuelve un nuevo objeto Iterator que contiene los valores de cada elemento en el Map en el orden de inserción.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

const valores = map.values();
for (let valor of valores) {
  console.log(valor);
}
/*
breativo
JavaScript
España
*/
```
<br>

- .entries() devuelve un nuevo objeto Iterator que contiene los pares [clave, valor] para cada elemento en el Map en el orden de inserción. Este es el método utilizado por defecto cuando se itera sobre un Map con for...of.
```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

const entradas = map.entries();
for (let [clave, valor] of entradas) {
  console.log(`${clave}: ${valor}`);
}
/*
nombre: breativo
lenguaje: JavaScript
país: España
*/
```
<br>

También puedes convertir las claves, valores, o entradas de un Map a un array usando el operador de propagación (...) o Array.from(). Luego, puedes iterar sobre el array resultante usando cualquier método de iteración de arrays.

```JavaScript
const map = new Map([
  ['nombre', 'breativo'],
  ['lenguaje', 'JavaScript'],
  ['país', 'España']
]);

// Convertir las claves a un array con el operador de propagación
const clavesArray = [...map.keys()];

// Iterar sobre el array de claves
clavesArray.forEach(clave => console.log(clave));

// Convertir los valores a un array con from
const valoresArray = Array.from(map.values());

// Iterar sobre el array de valores
valoresArray.forEach(valor => console.log(valor));

```
<br>

🎉 ¡Felicidades! Has completado esta lección con éxito. ${{\color{#ffcc66} ¡Gran\ trabajo!}}$
<br>
<br>

> [!NOTE] 
>JavaScript by breativo está en constante evolución. Pronto se añadirán más lecciones y ejercicios prácticos para mejorar aún más tu experiencia de aprendizaje. Mantente atento a las actualizaciones y sigue mejorando tus habilidades.

[Siguiente lección](URL_del_enlace) 
<br>
<br>

# Encuéntrame

<p style="font-size:16px;">
Puedes encontrarme en las siguientes plataformas.
</p>
</br>

![https://github.com/breativo/](https://raw.githubusercontent.com/breativo/breativo/master/img/img_breativo/Banner_negro.png)
</br>

[![YouTube](https://img.shields.io/badge/YouTube-breativo-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=101010)](https://www.youtube.com/channel/UC257J3j4W8gJFbuPJJxTs9w) 
[![Discord](https://img.shields.io/badge/Discord-breativo-5865F2?style=for-the-badge&logo=discord&logoColor=white&labelColor=101010)](https://breativo.com/discord)
<br>

[![Twitter](https://img.shields.io/badge/Twitter-@breativo-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white&labelColor=101010)](https://twitter.com/breativo)
[![Instagram](https://img.shields.io/badge/Instagram-@breativo-E4405F?style=for-the-badge&logo=instagram&logoColor=white&labelColor=101010)](https://www.instagram.com/breativo/)
[![TikTok](https://img.shields.io/badge/TikTok-@breativo-69C9D0?style=for-the-badge&logo=tiktok&logoColor=white&labelColor=101010)](https://tiktok.com/@breativo)
<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-breativo-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/breativo/)
[![Web](https://img.shields.io/badge/Web-breativo.com-1e8612?style=for-the-badge&logo=dev.to&logoColor=white&labelColor=101010)](https://breativo.com)
</br>

# Algunos vídeos del canal de YouTube.

### Puedes apoyar mi trabajo haciendo "☆ Star" en el repo o nominarme a "GitHub Star". ¡Gracias!

[![GitHub Star](https://img.shields.io/badge/GitHub-Nominar_a_star-yellow?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://stars.github.com/nominate/)

### Contacto.

[![Email](https://img.shields.io/badge/breativo@breativo.com-email_personal-D14836?style=for-the-badge&logo=gmail&logoColor=white&labelColor=101010)](mailto:breativo@breativo.com)