/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  resta,
  esImpar,
  elevarAlCuadrado,
  elevar,
  esPositivo,
  combinarNombres,
  retornarPerimetro,
  deEuroAdolar,
  esVocal,
  obtenerMayor,
  colors,
  esDiezOCinco,
  estaEnRango,
  esPrimo,
  esVerdadero,
  tieneTresDigitos,
  doWhile
} = require('../homework.js');

describe('nuevaString', function() {
  it('Deberia ser un string', function() {
    expect(typeof nuevaString).toBe('string');
  });
});

describe('nuevoNum', function() {
  it('Deberia ser un numero', function() {
    expect(typeof nuevoNum).toBe('number');
  });
});

describe('nuevoBool', function() {
  it('Deberia ser un booleano', function() {
    expect(typeof nuevoBool).toBe('boolean');
  });
});

describe('nuevaResta', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaResta).toBe(true);
  });
});

describe('nuevaMultiplicacion', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevaMultiplicacion).toBe(true);
  });
});

describe('nuevoModulo', function() {
  it('Deberia ser un booleano', function() {
    expect(nuevoModulo).toBe(true);
  });
});

describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', function() {
    expect(resta(5, 5)).toBe(0);
    expect(resta(-1, 5)).toBe(-6);
    expect(resta(5, -5)).toBe(10);
    expect(resta(0, 0)).toBe(0);
  });
});


describe('sonIguales(x, y)', function() {
  it('Deberia devolver true si los argumentos son iguales y sino false', function() {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});

describe('tienenMismaLongitud(str1, str2)', function() {
  it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  });
});

describe('menosQueNoventa(num)', function() {
  it('Deberia devolver true si el numero es menor a noventa sino false', function() {
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

describe('esImpar(num)', function() {
  it('Deberia devolver true si el numero es impar sino false', function() {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});

describe('elevarAlCuadrado(num)', function() {
  it('Deberia devolver el numero elevado al cuadrado', function() {
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

describe('elevar(num, exponent)', function() {
  it('Deberia devolver el numero elevado al exponente indicado', function() {
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

describe('esPositivo(numero)', function() {
  it('Debería devolver el string \Es positivo ó Es negativo\ según corresponda', function() {
    expect(esPositivo(0)).toBe(false);
    expect(esPositivo(23)).toBe('Es positivo');
    expect(esPositivo(-2)).toBe('Es negativo');
  });
});

describe('combinarNombres(firstName, lastName)', function() {
  it('Deberia devolver los strings combinados con un espacio en el medio', function() {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

describe('retornarPerimetro(lado)', function() {
  it('Deberia retornar el perímetro correcto del cuadrado', function() {
    expect(retornarPerimetro(2)).toBe(8);
    expect(retornarPerimetro(8)).toBe(32);
    expect(retornarPerimetro(0)).toBe(0);
  });
});

describe('deEuroAdolar(euro)', function() {
  it('Deberia retornar el valor correcto de euro a dolar', function() {
    expect(deEuroAdolar(100)).toBe(120);
    expect(deEuroAdolar(200)).toBe(240);
    expect(deEuroAdolar(50)).toBe(60);
  });
});

describe('esVocal(letra)', function() {
  it('Deberia devolver el strings "Dato incorrecto", si el valor ingresado tiene más de una letra', function() {
    expect(esVocal("la")).toBe("Dato incorrecto");
    expect(esVocal("pero")).toBe("Dato incorrecto");
  });
  it('Deberia devolver el strings "Es vocal", si el valor ingresado lo es', function() {
    expect(esVocal('a')).toBe('Es vocal');
    expect(esVocal('e')).toBe('Es vocal');
    expect(esVocal('i')).toBe('Es vocal');
    expect(esVocal('o')).toBe('Es vocal');
    expect(esVocal('u')).toBe('Es vocal');
  });
});

describe('obtenerMayor(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(obtenerMayor(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(obtenerMayor(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(obtenerMayor(1000, 1000)).toBe(1000);
  });
});

describe('colors(color)', function() {
  it('should return \'This is {color}\'', function() {
    expect(colors("blue")).toBe('This is blue');
    expect(colors("red")).toBe('This is red');
    expect(colors("green")).toBe('This is green');
    expect(colors("orange")).toBe('This is orange');
  });
  it('should return \'Color not found\' if there is no argument or the argument is none of the expected ones', function() {
    expect(colors()).toBe('Color not found');
    expect(colors("pink")).toBe('Color not found');
  });
});

describe('esDiezOCinco(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(esDiezOCinco(10)).toBe(true);
    expect(esDiezOCinco(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(esDiezOCinco(11)).toBe(false);
    expect(esDiezOCinco(6)).toBe(false);
    expect(esDiezOCinco(0)).toBe(false);
    expect(esDiezOCinco(5.01)).toBe(false);
  });
});

describe('estaEnRango(num)', function() {
  it('should return true if num is inside range', function() {
    expect(estaEnRango(35.5)).toBe(true);
    expect(estaEnRango(40)).toBe(true);
    expect(estaEnRango(49)).toBe(true);
    expect(estaEnRango(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(estaEnRango(10)).toBe(false);
    expect(estaEnRango(20)).toBe(false);
    expect(estaEnRango(50)).toBe(false);
    expect(estaEnRango(100)).toBe(false);
  });
});

describe('esPrimo(num)', function() {
  it('should return true if num is prime', function() {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(97)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(esPrimo(9)).toBe(false);
    expect(esPrimo(4)).toBe(false);
    expect(esPrimo(10)).toBe(false);
    expect(esPrimo(100)).toBe(false);
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});

describe('doWhile(numero)', function() {
  it('should add 5 to number until reaching a limit of 8 times and return the sum value', function() {
    expect(doWhile(5)).toBe(45);
    expect(doWhile(100)).toBe(140);
    expect(doWhile(-1)).toBe(39);
  });
});
