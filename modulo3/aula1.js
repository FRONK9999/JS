//Declaração de função(função hostinger)
falaOi();
function falaOi() {
    console.log('Oie');
}

// Fist-class objects
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();