function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
  
  function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
      if (typeof msg !== 'string') reject(new Error('false'));

      setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na promise');
      }, tempo)
    });
  }

  // Promise.all Promise.race Promise.resolve Promise.reject
  const promises = [
    'Primeiro valor',
    esperaAi('Primeiro promise 1', 3000),
    esperaAi('Primeiro promise 1', 500),
    esperaAi('Primeiro promise 1', 1000),
    'Outro valor'
  ];

  Promise.all(promises).then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  })