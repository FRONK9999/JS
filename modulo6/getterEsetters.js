const _velocidade = Symbol('velocidade');
class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    
    acelerar() {
        if(this.velociade >= 100) return;
        this.velocidade++;

    }

    freiar() {
        if(this.velociade <= 0) return;
        this.velociade--;
    }
}

const c1 = new Carro('Fusca');

