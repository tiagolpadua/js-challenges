// Escreva uma função que recebe uma função e um argumento, e retorna uma função que pode receber um segundo argumento:

// Em ciência da computação, currying é uma técnica de transformação de uma função que recebe múltiplos parâmetros
// (mais especificamente, uma n-tupla como parâmetro) de forma que ela pode ser chamada como uma cadeia de funções
// que recebem somente um parâmetro cada.
// Foi inventada por Moses Schönfinkel e Gottlob Frege, e independentemente por Haskell Curry.

const add = (x,y) => x + y;

const mul = (x, y) => x * y;

function curry(fn, x){
    return function (y) {
        return fn(x, y);
    }
}


console.log('curry(add, 2)(5)', curry(add, 2)(5));
console.log('curry(mul, 2)(5)', curry(mul, 2)(5));