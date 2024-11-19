"use strict";
// Types em function
function soma(x, y) {
    return x + y;
}
const result = soma(2, 3);
console.log(result);
// função lambda ou função de seta
const soma2 = (x, y) => x + y;
// Função com void
function semRetorno(...args) {
    console.log(args.join(' '));
}
semRetorno('Thiago', 'Augusto');
const person2 = {
    nome: 'Luís',
    sobrenome: 'Olávo',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};
person2.exibirNome();
