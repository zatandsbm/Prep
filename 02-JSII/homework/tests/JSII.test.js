/* eslint-disable no-undef */
const {
  devolverUltimoElemento,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  dePalabrasAFrase,
  arrayContiene,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  todosIguales,
  mesesDelAño,
  breakStatement,
  continueStatement,
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  actualizarPassword,
  agregarAmigo,
  sumarLikesDeUsuario
} = require('../homework');

describe('devolverUltimoElemento(arr)', function() {
  it('should return the last item in the array', function() {
    expect(devolverUltimoElemento([10, 10, 16, 12])).toBe(12);
    expect(devolverUltimoElemento([97, 100, 80, 55, 72, 94])).toBe(94);
    expect(devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
  });
});

describe('incrementarPorUno(arr)', function() {
  it('should return the array with each value incremented by one', function() {
    expect(incrementarPorUno([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
    expect(incrementarPorUno([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
    expect(incrementarPorUno([])).toEqual([]);
  });
});

describe('agregarItemAlFinalDelArray(arr, item)', function() {
  it('should return the array with the item added to the end', function() {
    expect(agregarItemAlFinalDelArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
    expect(agregarItemAlFinalDelArray([97, 100, 80, 55, 72, 94], 'Hola')).toEqual([97, 100, 80, 55, 72, 94, 'Hola']);
    expect(agregarItemAlFinalDelArray([], true)).toEqual([true]);
  });
});

describe('dePalabrasAFrase(words)', function() {
  it('should return a string that has all of the words from the array separated by spaces', function() {
    expect(dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])).toBe('Henry JavaScript Class');
    expect(dePalabrasAFrase(['Henry'])).toBe('Henry');
  });
});

describe('arrayContiene(arr, item)', function() {
  it('should return true if the array contains the item', function() {
    expect(arrayContiene([10, 10, 16, 12], 10)).toBe(true);
    expect(arrayContiene([97, 100, 80, 55, 72, 94], 'Hola')).toBe(false);
    expect(arrayContiene([], true)).toBe(false);
  });
});

describe('promedioResultadosTest(testScores)', function() {
  it('should return the average test score', function() {
    expect(promedioResultadosTest([10, 10, 16, 12])).toBe(12);
    expect(promedioResultadosTest([97, 100, 80, 55, 72, 94])).toBe(83);
  });
});

describe('numeroMasGrande(numbers)', function() {
  it('should return the largest number', function() {
    expect(numeroMasGrande([10, 10, 16, 12])).toBe(16);
    expect(numeroMasGrande([97, 100, 80, 55, 72, 94])).toBe(100);
    expect(numeroMasGrande([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
  });
});

describe('multiplicarArgumentos()', function () {
  it('should return the product of all the arguments', function () {
    const product = multiplicarArgumentos(5, 5);
    const product2 = multiplicarArgumentos();
    const product3 = multiplicarArgumentos(3, 3, 3, 3);
    const product4 = multiplicarArgumentos(1);
    const product5 = multiplicarArgumentos(10, 0, 10);
    expect(product).toBe(25);
    expect(product2).toBe(0);
    expect(product3).toBe(81);
    expect(product4).toBe(1);
    expect(product5).toBe(0);
  });
});

describe('cuentoElementos(arreglo)', function() {
  it('should return a counter with the total of numbers greater than 18', function() {
    expect(cuentoElementos([10, 10, 18, 21])).toBe(1);
    expect(cuentoElementos([97, 100, 190, 5, 7, 9])).toBe(3);
    expect(cuentoElementos([97, 20, 90, 50, 7, 709])).toBe(5);
  });
});

describe('todosIguales(arreglo)', function() {
  it('should return true if all the elements of the array are equal and false otherwise', function() {
    expect(todosIguales([20, 20, 20, 20 ])).toBe(true);
    expect(todosIguales([97, 100, 190, 9])).toBe(false);
   
    expect(todosIguales([230, 230, 230, 230 ])).toBe(true);
  });
});

describe('mesesDelAño(array)', function() {
  it('should return a new array with the requested months', function() {
    var ok = ["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"];
    var wrong = ["Marzo", "Diciembre", "Julio", "Noviembre"];
    expect(mesesDelAño(ok)).toEqual(["Marzo", "Noviembre", "Enero"]);
    expect(mesesDelAño(wrong)).toEqual("No se encontraron los meses pedidos");
  });
});

describe('breakStatement(numero)', function() {
  it('should return an array with the values ​​resulting from adding 2 in each iteration', function() {
    expect(breakStatement(50)).toEqual([52, 54, 56, 58, 60, 62, 64, 66, 68, 70]);
  });
  it('should stop the execution if the sum value and the iteration number match', function() {
    expect(breakStatement(-4)).toEqual('Se interrumpió la ejecución');
  });
});

describe('continueStatement(numero)', function() {
  it('should return an array with the values ​​resulting from adding 2 in each iteration when the iteration number is different from 5', function() {
    expect(continueStatement(50)).toEqual([52, 54, 56, 58, 60, 64, 66, 68, 70]);
    expect(continueStatement(-4)).toEqual([-2, 0, 2, 4, 6, 10, 12, 14, 16]);
  });
});

describe('crearGato(nombre, edad)', function() {
  it('should create a new cat with the nombre and edad properties set', function() {
    expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
    expect(crearGato('Snowball', 1).edad).toBe(1);
    expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
    expect(crearGato('Snowball II', 5).edad).toBe(5);
  });
  it('should add a method called meow to the new cat object', function() {
    expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
  });
});

describe('agregarPropiedad(object, property)', function() {
  it('should add the property to the object with a value of null', function() {
    const object = {
      x: 1,
      y: 2,
    };
    const updatedObject = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('invocarMetodo(object, method)', function() {
  it('should invoke the method on the object', function() {
    const object = {
      x: 0,
      incrementX: function() {
        this.x++;
      },
    }
    invocarMetodo(object, 'incrementX');
    expect(object.x).toBe(1);
  });
});

describe('multiplicarNumeroDesconocidoPorCinco(mysteryNumberObject)', function() {
  it('should return the mysteryNumber property multiplied by five', function() {
    const mysteryBox = {
      numeroMisterioso: 999,
    };
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
    mysteryBox.numeroMisterioso = -5;
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
  });
});

describe('eliminarPropiedad(object, property)', function() {
  it('should delete the property from the object', function() {
    const updatedObject = {
      x: 1,
      y: 2,
    };
    const object = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('nuevoUsuario(nombre, email, password)', function() {
  it('should return a new user object with a nombre, email, and password property that match the arguments', function() {
    const user = {
      nombre: 'Jhon',
      email: 'jhon@email.com',
      password: 'correcthorsebatterystaple',
    };
    expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
    const user2 = {
      nombre: 'Samuel',
      email: 'samuel@email.com',
      password: 'password',
    };
    expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(user2);
  });
});

describe('tieneEmail(user)', function() {
  it('should return true if the user object has a value for its email property', function() {
    expect(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })).toEqual(true);
    expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
    expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
  });
});

describe('tienePropiedad(object, property)', function() {
  it('should return true if the object has the property that is passed in', function() {
    const obj = {
      x: true,
    };
    expect(tienePropiedad(obj, 'x')).toEqual(true);
    expect(tienePropiedad(obj, 'y')).toEqual(false);
  });
});

describe('actualizarPassword(user, password)', function() {
  it('should return the user object with the updated password', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS mucho más!';
    expect(actualizarPassword(user, password).password).toBe(password);
  });
});

describe('agregarAmigo(user, newFriend)', function() {
  it('should add a new friend to the end of the amigos array property', function() {
    const user = {
      amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
    };
    const newFriend = 'Shay';
    expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
  });
});

describe('sumarLikesDeUsuario(user)', function() {
  it('should return the sum of likes for all user posts', function() {
    const user = {
      usernombre: 'Jhon Doe',
      password: 'JavaScript es genial!',
      posts: [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10
        },
        {
          id: '2',
          title: 'Soy Henry!',
          likes: 100
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99
        },
      ],
    };
    expect(sumarLikesDeUsuario(user)).toBe(286);
  });
});
