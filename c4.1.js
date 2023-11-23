// Funções de Ordem Superior

// Em JavaScript, as funções são tratadas como cidadãos de primeira classe.
// Podemos tratar funções como valores e atribuí-los a outra variável,
// passá-los como argumentos para outra função ou até mesmo retorná-los de outra função.

const add = (x, y) => x + y;

const mul = (x, y) => x * y;

function getOperacao(nome) {
    if (nome === 'soma') {
        return add;
    }

    if (nome === 'produto') {
        return mul;
    }
}

const op = getOperacao('produto');
console.log(op(3, 4));