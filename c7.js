// Escreva uma função que recebe uma função e um argumento, e retorna uma função que pode receber um segundo argumento:

const add = (x,y) => x + y;

const curry = (fn, x) => (y) => fn(x,y);

const f2 = curry(add, 2);

console.log('typeof f2', typeof f2);

const r = f2(5);

console.log('r', r);

console.log('curry(add, 2)(5)', curry(add, 2)(5));