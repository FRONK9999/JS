// IIFE => Immediately function expression
// Não toca o escopo global
(function(idade, peso, altura) {

    const sobrenome = 'Lucas';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Jhuan'));
    }

    falaNome()
    console.log(idade, peso, altura);

})(30, 80, 1.83);

const nome = 'Qualquer coisa' 
