// argumentos que sustenta todos os arguementos enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a, b, c)
}
funcao(1, 2, 3, 4, 5, 6, 7);

// ...
const conta = (...args) => {
    consoole.log(args);
};
conta('+', 1, 20, 30, 40, 50);