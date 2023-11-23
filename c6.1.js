// Escreva uma função que recebe uma função binária, e a aciona após duas invocações:

const add = (x,y) => x + y;

// Em matemática e ciência da computação, apply é uma função que aplica uma função a argumentos.
// É central para linguagens de programação derivadas do cálculo lambda, como LISP e Scheme,
// e também em linguagens funcionais.

function applyf(fn) {
    return function (x) {
        return function (y) {
            return fn(x,y);
        }
    }
}

console.log('applyf(add)(3)(6)', applyf(add)(3)(6));