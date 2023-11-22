const add = (x,y) => x + y;

const addf = (x) => (y) => x + y;

const applyf = (fn) => (x) => (y) => fn(x,y);

const curry = (fn, x) => (y) => fn(x,y);

const inc1 = addf(1);

console.log('inc1(1)', inc1(1));

const inc2 = applyf(add)(1);

console.log('inc2(2)', inc2(2));

const inc3 = curry(add, 1);

console.log('inc3(3)', inc3(3));