/* eslint-disable no-undef */
const {
	invocarCallback,
	operacionMatematica,
	sumarArray,
	forEach,
	map,
	filter,
  deObjetoArray,
  numberOfCharacters,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion
} = require('../homework');

describe('invocarCallback(cb)', function() {
  it('should invoke the callback that is passed in', function() {
		const cb = jest.fn();
		invocarCallback(cb);
    	expect(cb).toHaveBeenCalled();
  });
});

describe('operacionMatematica(n1, n2, cb)', function() {
	it('should return the callback function passing it the received arguments', function() {
		const cb = jest.fn();
		operacionMatematica(100, 20, cb);
		expect(cb).toHaveBeenCalled();
	});
});

describe('sumarArray(cb)', function() {
	it('should pass the sum of all array numbers to cb', function(done) {
		sumarArray([1, 2, 3, 4, 5], function(sum) {
			expect(sum).toBe(15);
			done();
		});
	});
});

describe('forEach(arr, cb)', function() {
	it('should pass all array items one by one to cb', function() {
		const nums = [];
		forEach([1, 2, 3, 4, 5], function(num) {
			nums.push(num);
		});
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});
});

describe('map(arr, cb)', function() {
	it('should return an array of all the processed array elements', function() {
		const squares = map([1, 2, 3, 4, 5], function(num) {
			return num * num;
		});
		expect(squares).toEqual([1, 4, 9, 16, 25]);
	});
});

describe('filter(array)', function() {
	it('should return an array conteining the words that starts with "a"', function() {
		var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];
		expect(filter(array)).toEqual(["abajo", "alerta", "azteca", "arbol"]);
	});
});

describe('deObjetoArray(objeto)', function() {
  it('should return an array, where each element represents a key-value pair in the form of an array.', function() {
    expect(deObjetoArray({ x: 1, y: 2 })).toEqual([["x" , 1],["y" , 2]]);
    expect(deObjetoArray({ x: 10, y: 25 })).toEqual([["x" , 10],["y" , 25]]);
  });
});

describe('numberOfCharacters(string)', function() {
  it('should return an object with the characters and the number of times they appear as a key-value pair', function() {
    expect(numberOfCharacters("sktpwrroqstkrpwwsqtqopwktsd")).toEqual({s:4, k:3, t:4, p:3, w:4, r:3, o:2, q:3, d:1 });
    expect(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")).toEqual({ a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 });
  });
});

describe('capicua(numero)', function() {
  it('should return Es capicua if the number is read from right to left', function() {
    expect(capicua(12321)).toEqual("Es capicua");
    expect(capicua(1111)).toEqual("Es capicua");
    expect(capicua(105217)).toEqual("No es capicua");
    expect(capicua(7878700)).toEqual("No es capicua");

  });
});  

describe('deleteAbc(cadena)', function() {
  it('should return the modified string if it has the letters abc or the same string otherwise', function() {
    expect(deleteAbc("abcefgh")).toEqual("efgh");
    expect(deleteAbc("abc")).toEqual("");
    expect(deleteAbc("plural")).toEqual("plurl");
    expect(deleteAbc("limon")).toEqual("limon");

  });
});  

describe('sortArray(array)', function() {
  it('should return a new array in increasing order', function() {
    expect(sortArray(["You", "are", "beautiful", "looking"])).toEqual(["You", "are", "looking", "beautiful"]);
    expect(sortArray(["pera", "manzana", "alcaucil", "papa"])).toEqual(["pera", "papa", "manzana", "alcaucil"]);
  });
});

describe('buscoInterseccion(arreglo1, arreglo2)', function() {
  it('should return the common elements of the array, and in case they do not match, return an empty array', function() {
    expect(buscoInterseccion([1, 2 , 3], [1, 5, 8 , 3])).toEqual([1, 3]);
    expect(buscoInterseccion([7 , 23, 4], [23, 70])).toEqual([23]);
    expect(buscoInterseccion([1, 20 , 3], [22, 5, 7])).toEqual([]);
  });
});    