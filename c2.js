// Escreva uma função que recebe um argumento e retorna este argumento:

// function declaration vs. function expression

function identity(x) {
    return x;
}

// const identity = function (x) {
//     return x;
// }

// const identity = (x) => {
//     return x;
// }

// const identity = (x) => x;

console.log('identity(10)', identity(10));