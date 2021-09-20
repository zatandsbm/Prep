<img  src='../logo.png' height='70px'>

# Lección 2: JSII - Arrays + Objects

En esta lección cubriremos:

* Introducción a los arrays
* Introducción a los objetos

## Introducción a los arrays

En la lección anterior discutimos los 3 tipos de datos básicos (cadenas/strings, números y booleanos) y cómo asignar esos tipos de datos a las variables. Discutimos cómo una variable solo puede apuntar a una sola cadena, número o booleano. Sin embargo, en muchos casos queremos poder apuntar a una colección de tipos de datos. Por ejemplo, ¿qué pasaría si quisiéramos hacer un seguimiento del nombre de cada estudiante en esta clase usando una sola variable, `nombresEstudiantes`. Podemos hacer eso usando Arrays. Podemos pensar en los arrays como contenedores de almacenamiento para colecciones de datos. Construir un array es simple, hay que declarar una variable y establecerla en []. Luego podemos agregar al contenedor (separadas por coma) tantas cadenas, números o booleanos como queramos y acceder a esos elementos cuando lo deseemos.

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];
```

### .length

Al igual que el tipo de dato _String_ tiene un método incorporado `.length`, también lo hacen los arrays. De hecho, el array tiene muchos métodos incorporados útiles (los discutiremos en más adelante). `.length` devolverá el número de elementos en un array:

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

console.log(nombresEstudiantes.length);  // 4
```

### Acceso a elementos en un array

Podemos acceder a un elemento de una array en cualquier momento, solo necesitamos llamar al elemento por su posición en la array. Los elementos reciben una posición numérica (índice) de acuerdo con su ubicación en la array, en orden. El orden numérico de una array SIEMPRE comienza en 0, por lo que el primer elemento está en el índice 0, el segundo en el índice 1, el tercero en el 2, y así sucesivamente (esto puede ser complicado al principio, pero solo recuerda que los arrays siempre comienzan en 0).

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];
                               0        1        2         3
```

Para acceder al elemento, escribiremos el nombre o la variable de array, seguidos de corchetes que contienen la asignación numérica.

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

console.log(nombresEstudiantes[1]);  // 'Juana'
```

Para acceder dinámicamente al último elemento de la array, utilizaremos el método `.length`. En nuestra array `nombresEstudiantes`, la longitud es 4. Sabemos que el primer elemento siempre será 0, y cada elemento posterior se desplaza sobre un número. Entonces, en nuestro ejemplo, el último elemento tiene un índice de 3. Usando nuestra propiedad de longitud mostraremos cómo se hace cuando no sabemos el número de elementos en una array:

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', ...,  'Agustina'];

console.log(nombresEstudiantes[nombresEstudiantes.length - 1]);  // 'Agustina'
```

### Asignación

Podemos asignar y reasignar cualquier índice en la array usando el corchete/índice y un "=".

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

nombresEstudiantes[0] = 'Candela';

console.log(nombresEstudiantes);  // ['Candela', 'Juana', 'Sara', 'Agustina']
```
### `.push` y `.pop`

Otros dos métodos de array incorporados muy útiles son `.push` y` .pop`. Estos métodos se refieren a la adición y eliminación de elementos de la array después de su declaración inicial.

`.push` agrega un elemento al final de la array, incrementando su longitud en 1. `.push` devuelve la nueva longitud.

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

nombresEstudiantes.push('Patricia');

console.log(nombresEstudiantes);  // ['Candela', 'Juana', 'Sara', 'Agustina', 'Patricia']
```

`.pop` elimina el último elemento de la array, disminuyendo la longitud en 1. `.pop` devuelve el elemento removido (_popped_).

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

nombresEstudiantes.pop();

console.log(nombresEstudiantes);  // ['Candela', 'Juana', 'Sara']
```

### `.unshift` y `.shift`

`.unshift` y` .shift` son exactamente como `.push` y` .pop`, excepto que operan en el primer elemento de la array. `.unshift(item)` colocará un nuevo elemento en la primera posición de la array, y `.shift()` eliminará el primer elemento de la array.

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

nombresEstudiantes.unshift('Nicole');

console.log(nombresEstudiantes);  // ['Nicole', 'Maria', 'Juana', 'Sara', 'Agustina']

nombresEstudiantes.shift();

console.log(nombresEstudiantes);  // ['Maria', 'Juana', 'Sara', 'Agustina']
```

### Notas sobre los arrays

Debido a que Javascript no es un lenguaje fuertemente tipado, los arrays tampoco necesitan ser tipadas. los arrays en Javascript pueden contener múltiples tipos de datos diferentes en la misma array

```javascript
var otroArreglo = [1, 2, 'Hola', null, undefined];
```

## Utilizando bucles `for` en arrays

La mayoría de las veces, los bucles for se utilizan para iterar sobre todos los elementos de una array. Usando la técnica de acceso al índice ("index access technique") podemos acceder a cada elemento de la array. Para hacer esto, usamos el método `.length` como punto de parada para el ciclo.

```javascript
const nombresEstudiantes = ['Maria', 'Juana', 'Sara', 'Agustina'];

for (let i = 0; i < nombresEstudiantes.length; i++) {
    console.log(nombresEstudiantes[i]);
}

// 'Maria'
// 'Juana'
// 'Sara'
// 'Agustina'
```