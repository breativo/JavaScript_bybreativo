![JavaScript by breativo](/img/titulo.png)

## ${{\color{#ffcc66}Trabajar\ con\ String\ y\ Números\ en\ JavaScript}}$

### ${{\color{#ffcc66}Trabajar\ con\ Números\ en\ JavaScript.}}$


En JavaScript, los números son un tipo de datos que se utiliza para representar tanto números enteros como de punto flotante (decimales). 

### ${{\color{#ffcc66}Tipos\ de\ números.}}$

- Enteros: Pueden ser positivos o negativos. JavaScript no distingue entre tipos de números enteros y de punto flotante; todos son tratados simplemente como Number.

- De Punto Flotante (Decimales): JavaScript utiliza el estándar IEEE 754 para representar números de punto flotante, lo que significa que puede manejar números muy grandes y muy pequeños con precisión decimal.
```JavaScript
let entero = 10; // 10
let decimal = 3.14; // 3.14
console.log(entero, decimal); 

```
<br>

- Precisión y Limitaciones
Número Máximo y Mínimo: En JavaScript, Number.MAX_VALUE representa el valor máximo representable, mientras que Number.MIN_VALUE es el valor más cercano a cero que se puede representar, no el valor negativo más bajo.
```JavaScript
let resultado = 0.1 + 0.2; // 0.30000000000000004
console.log(resultado);

```
<br>

- Enteros Seguros: El rango de enteros "seguros" (es decir, números que pueden ser representados exactamente y sin riesgo de pérdida de precisión) va desde Number.MIN_SAFE_INTEGER (-9,007,199,254,740,991) a Number.MAX_SAFE_INTEGER (9,007,199,254,740,991).
```JavaScript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

```
<br>

- Infinity y -Infinity: Representan el infinito positivo y negativo. Son el resultado de dividir por cero o de operaciones que exceden el rango de representación de los números en JavaScript.
```JavaScript
let dividirPorCero = 1 / 0; // Infinity
let negativoDividirPorCero = -1 / 0; // -Infinity
console.log(dividirPorCero, negativoDividirPorCero);

```
<br>

- NaN: Significa "Not-a-Number" y es el resultado de operaciones matemáticas indefinidas o erróneas.
```JavaScript
let resultadoNaN = 0 / 0; // NaN
let noEsUnNumero = "texto" * 2; // NaN
console.log(resultadoNaN, noEsUnNumero);

```
<br>

### ${{\color{#ffcc66}Operaciones\ con\ números.}}$

JavaScript soporta las operaciones aritméticas básicas como suma (+), resta (-), multiplicación (*), y división (/).
```JavaScript
let suma = 10 + 5; // Suma: 15
let resta = 10 - 5; // Resta: 5
let multiplicacion = 10 * 5; // Multiplicación: 50
let division = 10 / 5; // División: 2
console.log(suma, resta, multiplicacion, division);

```
<br>

Para operaciones más complejas, como obtener el seno de un número o redondear, puedes utilizar el objeto Math. Por ejemplo, Math.sin(x) o Math.round(x).

```Javascript
let redondear = Math.round(4.7); // 5
let maximo = Math.max(10, 20, 30, 40, 50); // 50
let seno = Math.sin(Math.PI / 2); // 1 (el seno de 90 grados)
console.log(redondear, maximo, seno);

```
<br>

### ${{\color{#ffcc66}Conversión\ y\ Parsing.}}$

Puedes convertir strings a números usando la función global parseInt(string, base) para enteros y parseFloat(string) para decimales. Es importante especificar la base en parseInt para evitar confusiones, especialmente con números que comienzan con cero, que podrían ser interpretados como octales.

```JavaScript
let numeroDesdeString = parseInt("100", 10); // 100
let decimalDesdeString = parseFloat("99.99"); // 99.99
let conversionRapida = +"42"; // 42
console.log(numeroDesdeString, decimalDesdeString, conversionRapida);

```
<br>

El operador unario + también puede convertir strings a números: +"123" se convierte en 123.

### ${{\color{#ffcc66}Especificidades.}}$

JavaScript utiliza un único tipo numérico para todos los números, lo que simplifica el lenguaje pero también introduce desafíos, especialmente en lo que respecta a la precisión con números muy grandes o cálculos de punto flotante.

La igualdad estricta (===) debe usarse para comparaciones para evitar conversiones automáticas de tipos que pueden llevar a resultados inesperados.
```JavaScript
console.log(0.1 + 0.2 == 0.3); // false debido a la precisión de punto flotante
console.log(0.1 + 0.2 === 0.3); // false, misma razón
console.log((0.1 + 0.2).toFixed(1) == 0.3); // true, después de corregir a un decimal

```
<br>

Comprender cómo JavaScript maneja los números y sus limitaciones es crucial para escribir código confiable, especialmente para aplicaciones que requieren precisión matemática o manejo de grandes conjuntos de datos.

## ${{\color{#ffcc66}Métodos\ para\ manejar\ números.}}$

### ${{\color{#ffcc66}Métodos\ number.}}$

- Number.isFinite(value): Determina si el valor proporcionado es un número finito.

- Number.isInteger(value): Comprueba si el valor proporcionado es un entero.
- Number.parseFloat(string): Convierte una cadena a un número de punto flotante.

- Number.parseInt(string, [radix]): Convierte una cadena a un entero, opcionalmente en la base especificada por radix.

- Number.isNaN(value): Verifica si el valor es NaN (Not-a-Number).
```JavaScript
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isInteger(4.5));      // false
console.log(Number.parseFloat("10.5"));  // 10.5
console.log(Number.parseInt("10.5"));    // 10
console.log(Number.isNaN(NaN));          // true

```
<br>

### ${{\color{#ffcc66}Métodos\ de\ instancias\ de\ números.}}$

Una vez tienes un número (ya sea un literal numérico o un objeto Number), puedes usar los siguientes métodos:

- toFixed([digits]): Devuelve una cadena que representa el número con un número fijo de dígitos después del punto decimal.

- toPrecision([precision]): Devuelve una cadena que representa el número con una precisión específica.

- toString([radix]): Convierte el número a una cadena, opcionalmente en la base especificada por radix.

- valueOf(): Devuelve el valor primitivo del objeto Number especificado.
```JavaScript
let numero = 1234.56789;

console.log(numero.toFixed(2));      // "1234.57"
console.log(numero.toPrecision(6));  // "1234.57"
console.log(numero.toString(16));    // "4d2.91eb851eb851f"
console.log(numero.valueOf());       // 1234.56789

```
<br>

### ${{\color{#ffcc66}Métodos\ del\ objeto\ Math.}}$

El objeto Math proporciona muchas propiedades y métodos para constantes y funciones matemáticas.

- Math.abs(x): Devuelve el valor absoluto de un número.

- Math.ceil(x): Redondea un número hacia arriba al entero más cercano.

- Math.floor(x): Redondea un número hacia abajo al entero más cercano.
Math.round(x): Redondea un número al entero más cercano.

- Math.max(x, y, ..., z): Devuelve el mayor de los cero o más números dados.

- Math.min(x, y, ..., z): Devuelve el menor de los cero o más números dados.

- Math.pow(base, exponent): Devuelve la base elevada al exponente, es decir, base^exponent.

- Math.random(): Genera un número pseudoaleatorio entre 0 y 1.

- Math.sqrt(x): Devuelve la raíz cuadrada de un número.

- Math.sin(x), Math.cos(x), Math.tan(x): Funciones trigonométricas que devuelven el seno, coseno y tangente de un ángulo en radianes, respectivamente.
```JavaScript
console.log(Math.abs(-10));          // 10
console.log(Math.ceil(10.2));        // 11
console.log(Math.floor(10.8));       // 10
console.log(Math.round(10.5));       // 11
console.log(Math.max(5, 10, 15));    // 15
console.log(Math.min(5, 10, 15));    // 5
console.log(Math.pow(2, 3));         // 8
console.log(Math.random());          // Número aleatorio entre 0 y 1
console.log(Math.sqrt(16));          // 4
console.log(Math.sin(Math.PI / 2));  // 1
console.log(Math.cos(0));            // 1
console.log(Math.tan(Math.PI / 4));  // 1

```
<br>

Estos métodos son esenciales para realizar operaciones matemáticas y manejar números en JavaScript, ya sea que estés trabajando en cálculos simples o en lógica de aplicación más compleja.
<br>


🎉 ¡Felicidades! Has completado esta lección con éxito. ${{\color{#ffcc66} ¡Gran\ trabajo!}}$
<br>
<br>

> [!NOTE] 
>JavaScript by breativo está en constante evolución. Pronto se añadirán más lecciones y ejercicios prácticos para mejorar aún más tu experiencia de aprendizaje. Mantente atento a las actualizaciones y sigue mejorando tus habilidades.

[Siguiente lección](https://github.com/breativo/JavaScript_bybreativo/tree/main/Lecciones_JavaScript/Lecci%C3%B3n05_Arreglos) 
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