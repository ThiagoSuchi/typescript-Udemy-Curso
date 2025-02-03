function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Erro ao processar promise, dígite o valor no tipo texto')
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

const promises = [
    esperaAi('Valor 1', 2000),
    esperaAi('Valor 2', 1000),
    esperaAi('Valor 3', 200),
    esperaAi('Valor 4', 5000),
]

// .race pega a primereira promise e resolve, se haver algum erro ele retorna o erro
Promise.race(promises)
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(err) {
        console.log(err);
    })