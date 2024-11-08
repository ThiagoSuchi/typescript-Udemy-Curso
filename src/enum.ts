// 🚨🚨Em projetos complexos ou com interoperação com JavaScript, considere cuidadosamente as implicações de usar enums.🚨🚨
// Enums permitem que um desenvolvedor defina um conjunto de constantes nomeadas. Usar enums pode facilitar a documentação de intenção ou criar um conjunto de casos distintos.
enum Cores {
    Vermelho, // 0
    Roxo, // 1
    Verde = 23, // 23
    Amarelo = 'Amarela'// 3
}
// Chama o valor-string da constante
console.log(Cores.Amarelo);

// chama o valor-numérico passado para a constante:
console.log(Cores.Verde);// 23

// chama a constante, através do seu valor informado [23]:
console.log(Cores[23]);// Amarelo

// Chama o valor da constante atríbuido automáticamente:
console.log(Cores.Roxo);// 1

//----------------------------------------------------------------------------------

// Trabalhando com a união dos enums
enum Comidas {
    Arroz = 'Arroz',
    Feijao = 'Feijão',
    Carne = 'Carne'
}
enum Comidas {
    Macarrao = 'Macarrão',
    Pure = 'Pure',
    Salada = 'Salada'
}

console.log(Comidas);







