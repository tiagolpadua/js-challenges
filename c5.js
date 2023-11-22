// Escreva uma função que soma com dois acionamentos:

const addf = (x) => (y) => x + y;

const f1 = addf(3);

console.log('typeof f1', typeof f1);

const r = f1(4);

console.log('typeof r', typeof r);

console.log('r', r);

console.log('addf(5)(7)', addf(5)(7))