/* Uso do operador spread */
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, ...obj1 };

console.log(obj2); // { c: 3, a: 1, b: 2 }

//Outro exemplo
let carros = ['Gol', 'Palio', 'Uno'];
let carrosAutomaticos = ['Civic',...carros];
console.log(carrosAutomaticos); // [ 'Civic', 'Gol', 'Palio', 'Uno' ]

//Rest Parameter
function duplicar(...numeros) {
    return numeros.map(numero => numero * 2);
}
duplicar(1, 2, 3, 4, 5); // [2, 4, 6, 8, 10]