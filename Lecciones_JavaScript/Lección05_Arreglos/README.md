![JavaScript by breativo](/img/titulo.png)

## ${{\color{#ffcc66}Trabajar\ con\ Arreglos\ en\ JavaScript}}$

### ${{\color{#ffcc66}Trabajar\ con\ Arreglos\ en\ JavaScript.}}$

Un arreglo en JavaScript es una estructura de datos que te permite almacenar múltiples valores en una sola variable. Está diseñado para contener una colección ordenada de elementos, donde cada elemento puede ser accedido mediante un índice numérico. 

### ${{\color{#ffcc66}Características\ principales.}}$

- Colección ordenada: Los elementos dentro de un arreglo están organizados en un orden específico, comenzando desde el índice 0 hasta el índice length - 1.

- Flexibilidad de tipos: Los arreglos en JavaScript pueden contener elementos de diferentes tipos de datos, como números, cadenas, booleanos, objetos, funciones e incluso otros arreglos.

- Mutabilidad: Los elementos de un arreglo pueden ser modificados, reemplazados o eliminados después de su creación. Esto significa que los arreglos son estructuras de datos mutables.

- Longitud dinámica: La longitud de un arreglo puede cambiar dinámicamente. Puedes agregar nuevos elementos, eliminar elementos existentes o modificar la longitud del arreglo en cualquier momento.

### ${{\color{#ffcc66}Declaración\ de\ arreglos\ en\ JavaScript.}}$

Las formas de declarar arreglos dentro de JavaScript.

- Notación de corchetes: let miArreglo = [1, 2, 3];

- Constructor Array: let miArreglo = new Array(1, 2, 3);

- Arreglo vacío: let miArreglo = [];

```JavaScript
let miArreglo = ["a", "b", "c", "d", "e"]; // [ 'a', 'b', 'c', 'd', 'e' ]
let nuevoArreglo = new Array("a", "b", "c", "d", "e"); // [ 'a', 'b', 'c', 'd', 'e' ]
let arregloVacio =[]; // []
```
<br>

### ${{\color{#ffcc66}Acceso\ a\ los\ elementos\ de\ los\ arreglos\ en\ JavaScript.}}$

Los elementos dentro de un arreglo están indexados, comenzando desde 0 y continuando hasta length - 1. Puedes acceder a un elemento específico utilizando su índice entre corchetes [] después del nombre del arreglo.
```JavaScript
let miArreglo = ["a", "b", "c", "d", "e"];
let primerElemento = miArreglo[0]; // Accede al primer elemento ("a")
let tercerElemento = miArreglo[2]; // Accede al tercer elemento ("c")

```
<br>

El índice del último elemento en un arreglo es siempre length - 1. Esto es útil para acceder al último elemento de un arreglo sin saber su valor específico.

```JavaScript
let ultimoElemento = miArreglo[miArreglo.length - 1]; // Accede al último elemento ("e")
```
<br>

También, puedes recorrer todos los elementos de un arreglo utilizando bucles como for o métodos como forEach().

```JavaScript
for (let i = 0; i < miArreglo.length; i++) {
    console.log(miArreglo[i]); // Imprime cada elemento del arreglo
}

miArreglo.forEach(function(elemento) {
    console.log(elemento); // Imprime cada elemento del arreglo
});
```
<br>

### ${{\color{#ffcc66}Métodos\ para\ acceder\ a\ los\ elementos\ de\ los\ arreglos\ en\ JavaScript.}}$

JavaScript proporciona métodos para acceder y manipular elementos en un arreglo de manera más avanzada:

- indexOf(): Encuentra el índice de un elemento específico en el arreglo.

```JavaScript
let frutas = ["manzana", "banana", "naranja", "pera", "banana"];
let indiceBanana = frutas.indexOf("banana"); // Devuelve 1
let indiceSandia = frutas.indexOf("sandia"); // Devuelve -1
```
<br>

- find(): Encuentra el primer elemento que cumple con una condición dada.

```JavaScript
let numeros = [10, 20, 30, 40, 50];
let numeroMayor30 = numeros.find(num => num > 30); // Devuelve 40

```
<br>

- filter(): Crea un nuevo arreglo con todos los elementos que cumplen una condición dada.

```JavaScript
let numeros = [10, 20, 30, 40, 50];
let numerosMayores30 = numeros.filter(num => num > 30); // Devuelve [40, 50]

```
<br>

- findIndex(): Encuentra el índice del primer elemento que cumple con una condición dada.

```JavaScript
let frutas = ["manzana", "banana", "naranja", "pera", "banana"];
let indicePrimeraBanana = frutas.findIndex(fruta => fruta === "banana"); // Devuelve 1
let indicePlatano = frutas.findIndex(fruta => fruta === "plátano"); // Devuelve -1

```
<br>

- includes(): Verifica si un elemento está presente en el arreglo.

```JavaScript
let frutas = ["manzana", "banana", "naranja", "pera"];
let tieneNaranja = frutas.includes("naranja"); // Devuelve true
let tienePlatano = frutas.includes("plátano"); // Devuelve false

```
<br>

-  slice(): Retorna una copia superficial de una porción del arreglo.

```JavaScript
let frutas = ["manzana", "banana", "naranja", "pera", "sandía"];
let porcion = frutas.slice(1, 3); // Devuelve ["banana", "naranja"]

```
<br>

### ${{\color{#ffcc66}Acceso\ a\ elementos\ anidados\  en\ los\ arreglos\ en\ JavaScript.}}$

Si un elemento dentro de un arreglo es otro arreglo (arreglo anidado), puedes acceder a los elementos del arreglo interno utilizando múltiples niveles de índices.

```JavaScript
let arregloAnidado = [[1, 2], [3, 4], [5, 6]];
let segundoElementoPrimerArreglo = arregloAnidado[0][1]; // Accede al segundo elemento del primer arreglo (2)
```
<br>

### ${{\color{#ffcc66}Métodos\ para\ trabajar\ con\ los\ arreglos\ en\ JavaScript.}}$

Los métodos para trabajar con arreglos en JavaScript son funciones integradas que se aplican a los arreglos para realizar diversas operaciones, como agregar elementos, eliminar elementos, iterar sobre los elementos, buscar elementos específicos, transformar los elementos del arreglo, entre otros. Estos métodos son parte del objeto Array en JavaScript y están disponibles para su uso directo en cualquier arreglo.

Aquí hay algunos ejemplos de métodos comunes para trabajar con arreglos:

- push(): Agrega uno o más elementos al final del arreglo.

- pop(): Elimina el último elemento del arreglo.

```JavaScript
let numeros = [1, 2, 3];

// Agrega un nuevo elemento al final del arreglo
numeros.push(4); // Ahora números es [1, 2, 3, 4]

// Elimina el último elemento del arreglo
let ultimoElemento = numeros.pop(); // Ahora números es [1, 2, 3] y ultimoElemento es 4

```
<br>

- unshift(): Agrega uno o más elementos al principio del arreglo.

```JavaScript
let frutas = ["naranja", "manzana", "plátano"];

// Agrega un elemento al principio del arreglo
frutas.unshift("uva");

console.log(frutas); // Imprime ["uva", "naranja", "manzana", "plátano"]

```
<br>

- shift(): Elimina el primer elemento del arreglo.

```JavaScript
let frutas = ["naranja", "manzana", "plátano"];

// Elimina el primer elemento del arreglo
let primeraFruta = frutas.shift();

console.log(frutas); // Imprime ["manzana", "plátano"]
console.log(primeraFruta); // Imprime "naranja"

```
<br>

- forEach(): Ejecuta una función para cada elemento del arreglo.

```JavaScript
let nombres = ["Juan", "María", "Pedro"];

// Itera sobre cada elemento del arreglo e imprime su valor
nombres.forEach(function(nombre) {
    console.log(nombre);
});

```
<br>

- map(): Crea un nuevo arreglo con los resultados de llamar a una función para cada elemento del arreglo.

```JavaScript
let numeros = [1, 2, 3];

// Crea un nuevo arreglo con el doble de cada número del arreglo original
let dobles = numeros.map(function(numero) {
    return numero * 2;
}); // Ahora dobles es [2, 4, 6]

```
<br>

- filter(): Crea un nuevo arreglo con todos los elementos que pasan una prueba proporcionada.

```JavaScript
let numeros = [1, 2, 3, 4, 5];

// Filtra los números pares del arreglo original
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
}); // Ahora pares es [2, 4]

```
<br>

- indexOf(): Devuelve el índice del primer elemento que coincide con el valor especificado.

```JavaScript
let colores = ["rojo", "verde", "azul"];

// Encuentra el índice del elemento "verde" en el arreglo
let indiceVerde = colores.indexOf("verde"); // Ahora indiceVerde es 1
```
<br>


- includes(): Determina si un arreglo incluye un determinado valor.

```JavaScript
let numeros = [1, 2, 3, 4, 5];

// Verifica si el número 3 está presente en el arreglo
let incluyeTres = numeros.includes(3);

console.log(incluyeTres); // Imprime true
```
<br>

- some(): Verifica si al menos un elemento del arreglo cumple con una condición proporcionada.

```JavaScript
let numeros = [1, 3, 5, 7, 9];

// Verifica si al menos un número en el arreglo es par
let algunPar = numeros.some(function(numero) {
    return numero % 2 === 0;
});

console.log(algunPar); // Imprime false, ya que no hay números pares en el arreglo
```
<br>

- every(): Verifica si todos los elementos del arreglo cumplen con una condición proporcionada.

```JavaScript
let numeros = [2, 4, 6, 8, 10];

// Verifica si todos los elementos del arreglo son pares
let todosPares = numeros.every(function(numero) {
    return numero % 2 === 0;
});

console.log(todosPares); // Imprime true, ya que todos los números en el arreglo son pares

```
<br>

- reduce(): Aplica una función a un acumulador y a cada elemento del arreglo para reducirlo a un solo valor.

```JavaScript
let numeros = [1, 2, 3, 4, 5];

// Suma todos los elementos del arreglo
let suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0); // El segundo argumento (0) es el valor inicial del acumulador

console.log(suma); // Imprime 15 (1 + 2 + 3 + 4 + 5)
```
<br>

- slice(): Extrae una sección del arreglo y devuelve un nuevo arreglo.

```JavaScript
let numeros = [1, 2, 3, 4, 5];

// Extrae una porción del arreglo original
let porcion = numeros.slice(1, 3); // Ahora porción es [2, 3]
```
<br>

Estos son solo algunos ejemplos de los muchos métodos disponibles para trabajar con arreglos en JavaScript. Cada uno de estos métodos tiene un propósito específico y puede ser útil en diferentes situaciones dependiendo de los requisitos del desarrollo. Los métodos de arreglo facilitan el trabajo con datos estructurados y proporcionan una manera limpia y eficiente de realizar operaciones comunes en arreglos.
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