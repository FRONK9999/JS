// const pessoa1 = {
//     nome: 'luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };

// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome) 


// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Jhuan', 'Lucas', 25)
// const pessoa2 = criaPessoa('Jean', 'Costa', 32)
// const pessoa3 = criaPessoa('Kenzo', 'Bath', 40)
// const pessoa4 = criaPessoa('Gio', 'Moreira', 80)
// console.log(pessoa1.nome, pessoa1.sobrenome)


const pessoa1 = {
    nome: 'Jhuan',
    sobrenome: 'Lucas',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }

};

    pessoa1.fala();
    pessoa1.incrementaIdade();
    pessoa1.fala(); 
    pessoa1.incrementaIdade();
    pessoa1.fala();    
    pessoa1.incrementaIdade();
    pessoa1.fala();