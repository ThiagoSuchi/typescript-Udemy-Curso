"use strict";
// O union type em TypeScript permite que uma variável, parâmetro ou retorno de função possa aceitar múltiplos tipos predefinidos.
function addOrConcat(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
    return `${a}${b}`;
}
console.log(addOrConcat(25, 30));
console.log(addOrConcat("25", "30"));
console.log(addOrConcat("25", 10));
// O union type é definido com o operador |. Isso permite que você liste os tipos possíveis, criando uma "união" entre eles.
let valor;
valor = "Olá"; // válido
valor = 123; // válido
