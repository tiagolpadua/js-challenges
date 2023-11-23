// Escreva uma função que soma com dois acionamentos:

function addf(x) {
    return function (y) {
        return x + y;
    }
}

console.log('addf(5)(7)', addf(5)(7))