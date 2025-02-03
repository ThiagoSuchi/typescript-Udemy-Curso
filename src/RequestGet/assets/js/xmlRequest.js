// Requisição ajax(assíncrona)
const request = obj => {
    return new Promise((result, reject) => {
        const xhr =new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                result(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        })
    })
}

document.addEventListener('click', (e) => {
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(element);
    }
})

async function carregaPagina(element) {
    const href = element.getAttribute('href');
    
    const objetoConfig = {
        method: 'GET',
        url: href
    }

    try {
        const response = await request(objetoConfig);
        carregaResultado(response);
    } catch (e) {
        console.log(e);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}

