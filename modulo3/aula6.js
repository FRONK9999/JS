// funções de callback 
//uma ação ocorre quando uma ação finaliza a gente executa essa função.
//De forma simples, callback é uma função passada como parâmetro para outra função. Sem saber, você acabou de usar uma função callback no código acima. A função setTimeout recebe dois parâmetros: o primeiro é uma função callback, e o segundo é o tempo que o interpretador irá esperar até executar essa função.

function rand(min = 1000, max= 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log('f1')
        if (callback) callback();
    }, rand())
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback()
    }, rand())
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback()
    }, rand())
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Mundo!')
}
