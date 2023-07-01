// Métodos de instância e estáticos

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }
    
    // metodo de instancia
    aumentarVolume() {
        this.volume += 2;
    }
    diminuirVolume() {
        this.volume -= 2;
    }

    //METODO ESTATICO
    static trocarPilha() {
        console.log('Ok, vou trocar')
    //
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocarPilha();
console.log(controle1);