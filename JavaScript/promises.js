function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo) {
    // A função resolve é usada para indicar que a promise concluíu
    // A função reject indica que a promise falhou
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Erro ao verificar valores, porfavor forneça valores tipo texto.')
                return
            }
            resolve(msg);
        }, tempo);
    })
}

// Aqui está um encadeamento de promises, onde há uma garantia que uma promise irá ser executada após a outra
// ou seja respeitando a sequência imposta pelo .then que encadea as promises
esperaAi('Abacaxi', rand(1, 5))
    // O then é um método que lida com uma promise resolvida, e para encadear varias promises
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Morango', rand(1, 5))
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Laranja', rand(1, 5))
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Esses são todas as frutas fornecidas.');
    })
    // O catch trata e retorna o erro que a promise ou uma cadeia de promise apresentar
    .catch(e => {
        console.log(e);
    })

console.log('Esse log irá aparecer antes de qualquer promise');
