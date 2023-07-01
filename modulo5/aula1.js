// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a  chave
        value: estoque, // valor
        Writable: true, // pode alterar ou nao
        configurable: false, // configuravel
    });
   
    Object.defineProperties(this, {
         nome: {
            enumerable: true, // mostra a  chave
            value: nome, // valor
            Writable: true, // pode alterar ou nao
            configurable: true, // configuravel
    
         },
         preco: {
            enumerable: true, // mostra a  chave
            value: preco, // valor
            Writable: true, // pode alterar ou nao
            configurable: true, // configuravel
         },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);