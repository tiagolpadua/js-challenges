const f = (x) => () => x;

const y = f(3);

console.log('typeof y', typeof y);

console.log('y()', y());

console.log('f(5)()', f(5)());