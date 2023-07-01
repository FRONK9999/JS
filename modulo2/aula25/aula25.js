/*
try {
    // é executada quando não há erros
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
} catch (err) {
    // é executada quando há erros
    console.log('Tratando erro');
} finally {
    console.log('FINNALY: Eu sempre sou executado');
    // Sempre
}
**/

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('101-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(err) {
    //Tratar erro
} finally {
    console.log('Tenha um bom dia');
}
