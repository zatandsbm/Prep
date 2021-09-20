<img  src='../logo.png' height='70px'>

# Lección 4: JSVI - Callbacks

En esta lección cubriremos:

* Callbacks
* Más métodos de Arrays

## Callbacks

Un concepto muy importante en Javascript es la capacidad de pasar una función como argumento a otra función. Estas funciones se denominan `callbacks`, pueden llamarse en cualquier momento y recibir argumentos dentro de la función. Pronto descubriremos por qué las devoluciones de llamada son tan importantes para Javascript. La convención es usar `cb` como nombre del argumento para la variable que se usará de callback.

```javascript
function decirHolaAlUsuario(usuario) {
    return 'Hola ' + usuario + '!';
}

function decirAdiosAlUsuario(usuario) {
    return 'Adiós ' + usuario + '!';
}

function crearSaludo(usuario, cb) {
    return cb(usuario);
}

crearSaludo('Wan', decirHolaAlUsuario); // 'Hola Wan!'
crearSaludo('Wan', decirAdiosAlUsuario); // 'Adiós Wan!'
```

## Más métodos de Arrays

Ya conocemos y utilizamos métodos de arrays, `.push`,` .pop`, `.shift`,` .unshift` y `.length`. Pero hay muchos más métodos disponibles de forma nativa en un array. Los métodos de los que vamos a hablar aquí se denominan "métodos de orden superior", porque toman los callbacks como argumentos.

### `.forEach`

`.forEach` es un bucle for integrado en cada array. `.forEach` toma un callback como su único argumento, e itera sobre cada elemento del array y llama al callback en él. El callback puede tomar dos argumentos, el primero es el elemento en sí, el segundo es el índice del elemento (este argumento es opcional).

```javascript
const autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

// Podemos escribir el callback en los paréntesis como una función anónima
autos.forEach(function(elemento, indice) {
    console.log(elemento);
});

// O podemos crear una instancia de una función para usarla como callback.
// Además, no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.
function mostrarNombres(elemento) {
    console.log(elemento);
}

// Y llama a esa función en los paréntesis del forEach
autos.forEach(mostrarNombres);
```

### `.reduce`

`.reduce` ejecutará un bucle en nuestro array con la intención de reducir cada elemento en un elemento que se devuelve. Como primer argumento, acepta un callback que toma dos argumentos, primero un 'acumulador' (el resultado del método de reducción hasta ahora), y el segundo es el elemento en el que se encuentra actualmente. El callback debe contener siempre una declaración de devolución ("return"). `.reduce` también toma un segundo argumento opcional, que sería el acumulador de arranque ("starting accumulator"). Si no se suministra el acumulador de arranque, la reducción comenzará en el primer elemento del array. `.reduce` siempre devolverá el acumulador cuando termine de recorrer los elementos.

```javascript
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const palabras = [ 'Hola,', 'mi', 'nombre', 'es', 'Wanda'];

// Podemos escribir la función anónima directamente en los paréntesis de .reduce
// Si omitimos el elemento inicial, siempre comenzará en el primer elemento.
const suma = numeros.reduce(function(acc, elemento){
    return acc + elemento;
});

// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
function multiplicarDosNumeros(a, b) {
    return a * b;
}

const productos = numeros.reduce(multiplicarDosNumeros);

// .reduce funciona en cualquier tipo de datos.
// En este ejemplo configuramos un acumulador de arranque
const frases = palabras.reduce(function(acc, elemento) {
    return acc + ' ' + elemento;
}, 'Frase completa:');

console.log(suma); // 45
console.log(productos); // 362880
console.log(frases); // "Frase completa: Hola, mi nombre es Wanda"
```
### `.map`

`.map` se usa cuando queremos cambiar cada elemento de un array de la misma manera. `.map` toma una devolución de llamada como único argumento. Al igual que el método `.forEach`, el callback tiene el elemento y el índice de argumentos opcionales. A diferencia de `.reduce`,` .map` devolverá todo el array.

```javascript
const numeros = [2, 3, 4, 5];

function multiplicarPorTres(elemento) {
    return elemento * 3;
}

const doble = numeros.map(function(elemento) {
    return elemento * 2;
});

const triple = numeros.map(multiplicarPorTres)

console.log(doble); // [ 4, 6, 8, 10 ]
console.log(triple); // [ 6, 9, 12, 15 ]
```

### `.filter`

`.filter` se usa cuando queremos crear un nuevo arreglo pero solamente con los elementos del original que cumplan determinada condición. Al igual que los otros métodos recibe una función de callback que va a ser la que se va a invocar por cada elemento del array, y en el caso de que retorne `true` va a guardar el elemento en el nuevo array, de lo contrario, no lo guardara ("lo filtra").

```javascript
var nums = [1, 2, 3, 4, 5, 6, 7];

var filterNums =  nums.filter(function(elemento) {
  return elemento % 2 === 0;
}, 0);

console.log(filterNums); // [2,4,6]
```