type  TemNome = {nome: string};
type TemSobrenome = {sobrenome: string};
type TemIdade = {idade: number};
type Person = TemNome & TemSobrenome & TemIdade;// & ou and (intercessão de tipos)

const pessoa: Person = {
    nome: 'Luanda',
    sobrenome: 'Miranda Gomes',
    idade: 21
}

console.log(pessoa);

export {pessoa} 

/* A interseção de tipos (ou intersection of types) em TypeScript é uma funcionalidade que permite
combinar dois ou mais tipos em um único tipo composto. Isso exige que o valor resultante
satisfaça todos os tipos envolvidos, ou seja, ele precisa conter as características e
propriedades de cada tipo combinado. */