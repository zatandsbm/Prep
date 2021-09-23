// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // La clase debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:

  // Opción 1 (ES6):
  // class Usuario {
  //   constructor(opciones) {
  //     this.usuario = opciones.usuario;
  //     this.nombre = opciones.nombre;
  //     this.email = opciones.email;
  //     this.password = opciones.password;
  //   }

  //   saludar() {
  //     return 'Hola, mi nombre es ' + this.nombre;
  //   }
  // }
  // return Usuario;

  // Opción 2 (Función constructora):
  function Usuario(opciones) {
    this.usuario = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.password = opciones.password;
  }

  Usuario.prototype.saludar = function() {
    return 'Hola, mi nombre es ' + this.nombre;
  }

  return Usuario;
}

function agregarMetodoPrototype(ClaseInventada) {
  // Agrega un método al `prototype` de ClaseInventada
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  ClaseInventada.prototype.saludar = function() {
    return 'Hello World!';
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  // Tu código:
  String.prototype.reverse = function() {
    var reverseString = '';
    for (var i = 0; i < this.length; i++) {
      reverseString = this[i] + reverseString;
    }
    return reverseString;
  }
}

// ---------------------------------------------------------------------------//
  // Crea el constructor de la clase "Persona"
  // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  // Los valores a aisgnarle a dichas propiedaes los recibirá por parámetro el constructor

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Tu código:
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var nuevaPersona = new Persona(nombre, apellido, edad, dir);
  return nuevaPersona;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  // Tu código:
  Persona.prototype.datos = function() {
    return this.nombre + ', ' + this.edad + ' años'; 
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
