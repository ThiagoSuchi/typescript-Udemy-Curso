// Ultilizzando .then no fetch:
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosPagina(json))

// Ultilizando axios:
axios('pessoas.json')
    .then(resposta => carregaElementosPagina(resposta.data))


function carregaElementosPagina(json) {
    const table = document.createElement('table')

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}