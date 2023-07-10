function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if(typeof msg !== 'string') reject(new Error('ERROR'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase1', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return esperaAi('Coloque seus dados bancarios aqui', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi('Recolhendo seus dados bancarios', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('AGORA SEU PXI FOI SEQUESTRADO');
}).catch(e => {
  console.log('ERROR', e);
})