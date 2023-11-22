const add = (x,y) => x + y;

const applyf = (fn) => (x) => (y) => fn(x,y);

const f1 = applyf(add);

console.log('typeof f1', typeof f1);

const f2 = f1(3);

console.log('typeof f2', typeof f2);

const r = f2(6);

console.log('typeof r', typeof r);

console.log('r', r);

console.log('applyf(add)(3)(6)', applyf(add)(3)(6));