"use strict";
// O tipo object no TypeScript é uma maneira de garantir que um valor seja um objeto (mas sem definição específica de suas propriedades), sendo útil em funções genéricas e situações onde não precisamos definir a estrutura do objeto diretamente.
let pessoa = {
    nome: 'Luan Silva',
    idade: 30
};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
let person = {
    nome: 'Laura Martinelli',
    idade: 24
};
console.log(person);
console.log(person.nome);
console.log(person.idade);
//-------------------------------------------------------------------------------------------
// Index Signature -
// permite que você defina um tipo para objetos onde as chaves são dinâmicas, ou seja, não conhecidas ou específicas de antemão.
const objectA = {
    3: 'Três',
    5: 'Cinco',
};
const objectB = {
    Valor1: [1, 2, 3, 4, 5],
    Valor2: 'Academia',
    Valor3: 22,
    Valor4: true
};
