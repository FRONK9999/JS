function monstraHora(); {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false                                                                                                   
    });
}

const time = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function() {
    clearInterval(time);
}, 3000);

setTimeout(function() {
    console.log('Óla mundo!');
}, 5000)