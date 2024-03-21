![JavaScript by breativo](/img/titulo.png)

## ${{\color{#ffcc66}Trabajar\ con\ String\ y\ Números\ en\ JavaScript}}$

### ${{\color{#ffcc66}Trabajar\ con\ String\ en\ JavaScript.}}$

Trabajar con cadenas de texto (strings) en JavaScript es una tarea común y el lenguaje proporciona una gran variedad de métodos y propiedades para manipular estas cadenas.

En JavaScript, puedes usar tanto comillas simples (') como comillas dobles (") para definir cadenas de texto (strings). La elección entre una u otra es en gran medida una cuestión de preferencia personal o de las convenciones de codificación del proyecto en el que estés trabajando.

```JavaScript
let saludoConComillasSimples = 'Hola, mundo!';
let saludoConComillasDobles = "Hola, mundo!";

```
### ${{\color{#ffcc66}Consistencia.}}$
Consistencia
Es importante mantener la consistencia en todo tu proyecto. Si eliges comillas simples, trata de usarlas siempre para definir cadenas de texto, y lo mismo aplica si eliges comillas dobles. Esto ayuda a mantener tu código limpio y fácil de leer.

### ${{\color{#ffcc66}Comillas\ anidadas.}}$

Una razón práctica para elegir un tipo de comilla sobre el otro es cuando tu cadena contiene comillas. Para evitar tener que escapar las comillas dentro de la cadena, puedes usar un tipo de comilla para definir la cadena y el otro tipo de comilla dentro de la cadena.

```JavaScript
let fraseConComillasDobles = 'Él dijo: "Hola, mundo!"';
let fraseConComillasSimples = "Ella respondió: '¡Hola a todos!'";

```
<br>

### ${{\color{#ffcc66}Concatenación\ de\ Strings.}}$

La concatenación es el proceso de unir dos o más cadenas de texto para formar una nueva cadena. En JavaScript, esto se puede hacer de varias maneras:

Usando el Operador +

```JavaScript
let string = "Hola, " + "mundo!";
console.log(string); // "Hola, mundo!"
```
<br>

También puedes concatenar variables que contienen strings:

```JavaScript
let stringEnd = "mundo!";
let string = "Hola, " + stringEnd;
console.log(string); // "Hola, mundo!"
```
<br>

Usando el Método .concat():
<br>
El método concat() de los strings permite unir dos o más cadenas:

```JavaScript
let string = "Hola, ".concat("mundo", "!");
console.log(string); // "Hola, mundo!"

```
<br>

### ${{\color{#ffcc66}Interpolación\ de\ Strings.}}$

La interpolación es una técnica que permite insertar expresiones dentro de cadenas de texto. En JavaScript, esto se logra principalmente a través de las plantillas literales (template literals), que se delimitan con comillas invertidas (`).

Plantillas Literales (Template Literals)
Las plantillas literales permiten incluir expresiones dentro de ${} dentro de la cadena:

```JavaScript
let name = "breativo";
let string = `Hola, ${name}!`;
console.log(string); // "Hola, breativo!"
```
<br>

### ${{\color{#ffcc66}Ventajas\ de\ la\ Interpolación\ sobre\ Concatenación.}}$

- Legibilidad: Las plantillas literales ofrecen una sintaxis más clara y concisa, especialmente cuando se insertan varias variables o expresiones dentro de una cadena.
- Facilidad de uso para strings multilínea: Con las plantillas literales, es más sencillo crear cadenas que se extiendan a través de múltiples líneas sin recurrir a la concatenación o al uso de caracteres especiales.
- Expresividad: Permiten incluir expresiones completas de JavaScript dentro de una cadena, lo cual amplía considerablemente las posibilidades de manipulación de strings.

### ${{\color{#ffcc66}Acceder\ a\ elementos\ de\ un\ strings.}}$

Para acceder a elementos específicos (caracteres) de un string en JavaScript, puedes utilizar el método de acceso por índice (bracket notation) o el método charAt(). Los strings se consideran "array-like", lo que significa que cada carácter en el string tiene un índice comenzando desde 0 para el primer carácter, 1 para el segundo, y así sucesivamente.

Si intentas acceder a un índice fuera del rango del string, obtendrás undefined:

Acceso por Índice (Bracket Notation).
```JavaScript
let string = "Hola mundo";
console.log(string[0]); // "H"
console.log(string[5]); // "m"

console.log(string[20]); // undefined
```
<br>

El método charAt(index) devuelve el carácter en el índice especificado. Si el índice está fuera del rango, charAt() devuelve una cadena vacía (""), lo cual es una diferencia clave respecto al acceso por índice.

Acceso por método (charAt())
```JavaScript
let string = "Hola mundo";
console.log(string.charAt(0)); // "H"
console.log(string.charAt(5)); // "m"
console.log(string.charAt(20)); // "" 

```
<br>

Si deseamos acceder a caracteres de un string empezando desde el final (de atrás hacia adelante), puedes hacerlo calculando la posición relativa al final del string. 

JavaScript no tiene un método incorporado específicamente para acceder a los caracteres en reversa directamente, pero puedes lograrlo fácilmente con un poco de matemática y utilizando la propiedad .length del string.

```JavaScript
let string = "Hola mundo";

// Acceder al último carácter
console.log(string[string.length - 1]); // "o"

// Acceder al penúltimo carácter
console.log(string[string.length - 2]); // "d"

```
<br>

### ${{\color{#ffcc66}Métodos\ para\ manejar\ strings.}}$
- ${{\color{#ffcc66}length}}$, propiedad que retorna la longitud de un string.
```JavaScript
let string = "Hola mundo";
console.log(string.length); // 10

```
<br>

- ${{\color{#ffcc66}charAt(index)}}$, devuelve el carácter en la posición especificada.
```JavaScript
let string = "Hola mundo";
console.log(string.charAt(0)); // "H"
console.log(string.charAt(3)); // "l"

```
<br>

- ${{\color{#ffcc66}includes(searchString, position)}}$, determina si un string contiene una secuencia de caracteres especificada.
```JavaScript
let string = "Hola mundo";
console.log(string.includes("mundo")); // true

```
<br>

- ${{\color{#ffcc66}indexOf(searchValue, fromIndex)}}$, devuelve el índice de la primera aparición del valor especificado, o -1 si no se encuentra.
```JavaScript
let string = "Hola mundo";
console.log(string.indexOf("mundo")); // 5

```
<br>

- ${{\color{#ffcc66}lastIndexOf(searchValue, fromIndex)}}$, similar a indexOf, pero busca desde el final del string.
```JavaScript
let string = "Hola mundo";
console.log(string.lastIndexOf("o")); // 9

```
<br>

- ${{\color{#ffcc66}replace(searchFor, replaceWith)}}$, reemplaza la primera aparición de una cadena de texto por otra.
```JavaScript
let string = "Hola mundo";
console.log(string.replace("Hola", "Adiós")); // "Adiós mundo"

```
<br>

- ${{\color{#ffcc66}replaceAll(searchFor, replaceWith)}}$, reemplaza todas las apariciones de una cadena de texto por otra.
```JavaScript
let string = "Ana lava lana";
console.log(string.replaceAll("a", "o")); // "ono lovo lono"

```
<br>

- ${{\color{#ffcc66}slice(startIndex, endIndex)}}$, extrae una sección de un string y devuelve un nuevo string.
```JavaScript
let string = "Hola mundo";
console.log(string.slice(0, 4)); // "Hola"

```
<br>

- ${{\color{#ffcc66}split(separator, limit)}}$, divide un string en un array de strings mediante un separador.
```JavaScript 
let string = "Hola mundo";
console.log(string.split(" ")); // ["Hola", "mundo"]

```
<br>

-  ${{\color{#ffcc66}substring(startIndex, endIndex)}}$, similar a slice, pero no acepta índices negativos.
```JavaScript 
let string = "Hola mundo";
console.log(string.substring(5, 10)); // "mundo"

```
<br>

- ${{\color{#ffcc66}toLowerCase()}}$, convierte un string a minúsculas.
```JavaScript
let string = "Hola mundo";
console.log(string.toLowerCase()); // "hola mundo"

```
<br>

- ${{\color{#ffcc66}toUpperCase()}}$, convierte un string a mayúsculas.
```JavaScript
let string = "Hola mundo";
console.log(string.toUpperCase()); // "HOLA MUNDO"

```
<br>

- ${{\color{#ffcc66}trim()}}$, elimina los espacios en blanco desde ambos extremos del string.
```JavaScript
let saludoConEspacios = "    Hola mundo    ";
console.log(saludoConEspacios.trim()); // "Hola mundo"

```
<br>

Los métodos trimStart() y trimEnd() en JavaScript son variaciones del método trim() y sirven para eliminar los espacios en blanco al inicio y al final de un string, respectivamente, sin afectar el otro extremo del string.

- ${{\color{#ffcc66}trimStart()\ o\ trimLeft()}}$, elimina los espacios en blanco al inicio de un string.

```JavaScript
let saludoConEspaciosInicio = "    Hola mundo";
console.log(saludoConEspaciosInicio.trimStart()); // "Hola mundo"
// O usando trimLeft, que es un alias y hace lo mismo
console.log(saludoConEspaciosInicio.trimLeft()); // "Hola mundo"

```
<br>

- ${{\color{#ffcc66}trimEnd()\ o\ trimRight()}}$, elimina los espacios en blanco al final de un string.
```JavaScript
let saludoConEspaciosFinal = "Hola mundo    ";
console.log(saludoConEspaciosFinal.trimEnd()); // "Hola mundo"
// O usando trimRight, que es un alias y hace lo mismo
console.log(saludoConEspaciosFinal.trimRight()); // "Hola mundo"

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