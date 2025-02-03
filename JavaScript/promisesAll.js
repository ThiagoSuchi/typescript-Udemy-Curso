function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Erro: dígite um valor tipo texto');
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- A promise foi resolvida');
        }, tempo)
    })

}

const promises = [
    'Primeiro valor',
    esperaAi('Valor 1', 3000),
    esperaAi('Valor 2', 500),
    esperaAi('Valor 3', 1000),
    'Último valor'
]
// Promise.all é um método que permite executar muitas promises em paralelo, e aguardar até que todos elas sejam resolvidas
Promise.all(promises)
    .then(function (e) {
        console.log(e);
    })
    .catch(function (e) {
        console.log(e);
    })