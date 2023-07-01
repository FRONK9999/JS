// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Peswsoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privado
    const ID = 123456;
    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');

    };
}

const p1 = new Pessoa('Jhuan', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p1.metodo();

