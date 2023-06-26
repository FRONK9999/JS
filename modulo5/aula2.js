// Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a  chave
        configurable: false, // configuravel    
        get: function () {
            return estoquePrivado
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = '500';
console.log(p1.estoque);