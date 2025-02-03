function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function esperaAi(msg, tempo) {
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

async function executa() {
    try {
        const fase1 = await esperaAi('Primeira fase 1', rand(1, 3));
        console.log(fase1);
        
        const fase2 = await esperaAi('Segunda fase 2', rand(1, 3));
        console.log(fase2)

        const fase3 = await esperaAi(3, rand(1, 3));
        console.log(fase3)

        console.log('Todas as fase foram executadas e resolvidas.');
    } catch (e) {
        console.log(e);
    }
}
executa()