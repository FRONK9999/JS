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

  const promises = [
    esperaAi('Primeiro promise 1', rand(1, 5)),
    esperaAi('Primeiro promise 2', rand(1, 5)),
    esperaAi('Primeiro promise 3', rand(1, 5)),
  ];

  Promise.race(promises).then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  })