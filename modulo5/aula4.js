// Prototypes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeComplto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

const pessoa1 = new Pessoa('Luiz', 'O.') // <- = Função construtora
const data = new Data(); // <- Date = Função construtora

console.dir(pessoa1);
console.log(data)