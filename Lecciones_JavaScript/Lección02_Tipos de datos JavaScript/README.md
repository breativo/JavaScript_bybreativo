![JavaScript by breativo](/img/titulo.png)

## ${{\color{#ffcc66}Variables\ en\ JavaScript}}$

### ${{\color{#ffcc66}Declaración\ de\ variables.}}$

${{\color{#ffcc66}Declaración\ de\ variables.}}$ La declaración de una variable es el proceso de reservar un espacio en la memoria para almacenar datos. En JavaScript, puedes declarar variables utilizando las palabras clave var, let o const.
<br>

- ${{\color{#ffcc66}var:}}$ Es la forma más antigua de declarar variables en JavaScript. Las variables declaradas con var tienen un alcance de función o un alcance global si se declaran fuera de una función. Estas variables pueden ser redeclaradas y reasignadas. Sin embargo, tienen un comportamiento de "elevación" (hoisting), lo que significa que pueden ser utilizadas antes de ser declaradas en el código.
- ${{\color{#ffcc66}let:}}$Introducida en ECMAScript 6 (ES6), let permite declarar variables con un alcance de bloque, lo que significa que solo son visibles dentro del bloque donde se declaran (por ejemplo, dentro de una función, un bucle o un bloque if). Las variables let no pueden ser redeclaradas en el mismo ámbito, pero sí pueden ser reasignadas.
- ${{\color{#ffcc66}const:}}$ También introducida en ES6, const se utiliza para declarar variables cuyo valor no cambiará después de la inicialización. Las variables const deben inicializarse al momento de la declaración y no pueden ser reasignadas ni redeclaradas en el mismo ámbito. Sin embargo, los objetos y matrices declarados con const pueden tener sus propiedades o elementos modificados.

```JavaScript

var age;
let name;
const COURSE = `JavaScript`;

```
<br>

${{\color{#ffcc66}Asignación\ de\ variables.}}$ La asignación de variables es el proceso de almacenar un valor en una variable previamente declarada. Esto se hace utilizando el operador de asignación (=).

```JavaScript

age = 1;
name = `breativo`;

```
<br>

También puedes declarar y asignar una variable en la misma línea:
```JavaScript

var age = 1;
let name = `breativo`;
const COURSE= `JavaScript`;

```
<br>

${{\color{#ffcc66}Nombres\ de\ variables.}}$ Los nombres de las variables en JavaScript pueden consistir en letras, dígitos, guiones bajos (_) y signos de dólar ($). Sin embargo, el primer carácter no puede ser un dígito. Además, JavaScript distingue entre mayúsculas y minúsculas, por lo que nombre y Nombre se consideran nombres de variables diferentes. Es importante elegir nombres de variables descriptivos y significativos que reflejen su propósito o contenido.

Se recomienda seguir algunas convenciones de nomenclatura comunes, como el estilo camelCase (primeras letras en minúsculas, con las palabras subsecuentes en mayúsculas), para mejorar la legibilidad del código.

En JavaScript, puedes ${{\color{#ffcc66}operar\ con\ varias\ variables.}}$ de la misma manera que operas con una sola variable. Puedes realizar operaciones aritméticas, concatenación de cadenas, comparaciones y cualquier otra operación que necesites.

```JavaScript
let x = 5;
let y = 3;
let sum = x + y; // suma será igual a 8


let name = `by breativo`;
let course = `JavaScript`;
let string = course + name;
```
```JavaScript
// Respuesta
8
JavaScript by breativo
```
<br>

## ${{\color{#ffcc66}Tipos\ de\ variables\ en\ JavaScript}}$

Los tipos de datos en JavaScript se pueden clasificar en dos categorías principales: primitivos y no primitivos (también conocidos como tipos de datos de referencia). 

${{\color{#ffcc66}Tipos\ de\ datos\ primitivos\ en\ JavaScript:}}$

- String (Cadena): Se utiliza para representar texto. Las cadenas se pueden escribir entre comillas simples (') o dobles ("). 
- Number (Número): Se utiliza para representar valores numéricos, ya sean enteros o de punto flotante. 
- Boolean (Booleano): Se utiliza para representar valores de verdadero (true) o falso (false). 
- Undefined: Indica que una variable ha sido declarada pero aún no se le ha asignado ningún valor. 
- Null: Se utiliza para representar la ausencia intencionada de un valor.

```JavaScript
// String
let name =`breativo`;

// Number
let year = 2024;

// Boolean
let isJavaScript = true;

// Undefined
let course;

// Null
let courses = null;

```
```JavaScript
// Respuesta 
breativo
2024
true
undefined
null

```

${{\color{#ffcc66}Tipos\ de\ datos\ no\ primitivos\ en\ JavaScript:}}$

Los tipos de datos no primitivos en JavaScript son aquellos que no son primitivos y representan estructuras de datos más complejas. 

- Object (Objeto): El tipo de dato Object se utiliza para almacenar colecciones de datos en pares de clave-valor. Los objetos pueden contener propiedades y métodos.
- Array (Arreglo): El tipo de dato Array se utiliza para almacenar una colección ordenada de elementos. Los elementos de un arreglo pueden ser de cualquier tipo de dato, incluyendo otros arreglos u objetos.
- Function (Función): El tipo de dato Function se utiliza para representar bloques de código reutilizables. Las funciones pueden ser declaradas o expresadas. 
- Date (Fecha): El tipo de dato Date se utiliza para representar fechas y horas. 

```JavaScript
// Object
let person={
    name : `breativo`,
    age : 43,
    isJavaScript : true
};


// Array
let skill=[`Java`, `JavaScript`, `Python`];

// Function
function sum(a, b) {
    return a + b;
}

let string = function() {
    console.log("¡Hola mundo!");
};

// Date
let currentDate = new Date();

```
<br>

Estos son algunos ejemplos de tipos de datos no primitivos en JavaScript. Son considerados no primitivos porque representan estructuras de datos más complejas que los tipos de datos primitivos.
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