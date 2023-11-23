// function declaration vs. function expression

function identity(x) {
    return x;
}

const identity = function (x) {
    return x;
}

const identity = (x) => {
    return x;
}

const identity = (x) => x;