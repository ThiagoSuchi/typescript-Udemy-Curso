// O tipo object no TypeScript é uma maneira de garantir que um valor seja um objeto (mas sem definição específica de suas propriedades), sendo útil em funções genéricas e situações onde não precisamos definir a estrutura do objeto diretamente.

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Luan Silva',
    idade: 30
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

//-------------------------------------------------------------------------------------------

type Pessoa = {
    nome: string,
    idade: number,
    adulto?: boolean
}

let person: Pessoa = {
    nome: 'Laura Martinelli',
    idade: 24
}

console.log(person);
console.log(person.nome);
console.log(person.idade);
