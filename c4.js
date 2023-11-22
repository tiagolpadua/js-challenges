// Escreva uma função que recebe um argumento e retorna uma função que retorna o argumento:

// Funções de Ordem Superior
// Em JavaScript, as funções são tratadas como cidadãos de primeira classe.
// Podemos tratar funções como valores e atribuí-los a outra variável,
// passá-los como argumentos para outra função ou até mesmo retorná-los de outra função.

// Closures
// Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico).
// Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna.
// Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

const f = (x) => () => x;

const y = f(3);

console.log('typeof y', typeof y);

console.log('y()', y());

console.log('f(5)()', f(5)());