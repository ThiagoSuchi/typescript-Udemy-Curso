"use strict";
// 🚨🚨Em projetos complexos ou com interoperação com JavaScript, considere cuidadosamente as implicações de usar enums.🚨🚨
// Enums permitem que um desenvolvedor defina um conjunto de constantes nomeadas. Usar enums pode facilitar a documentação de intenção ou criar um conjunto de casos distintos.
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Roxo"] = 1] = "Roxo";
    Cores[Cores["Verde"] = 23] = "Verde";
    Cores["Amarelo"] = "Amarela"; // 3
})(Cores || (Cores = {}));
// Chama o valor-string da constante
console.log(Cores.Amarelo);
// chama o valor-numérico passado para a constante:
console.log(Cores.Verde); // 23
// chama a constante, através do seu valor informado [23]:
console.log(Cores[23]); // Amarelo
// Chama o valor da constante atríbuido automáticamente:
console.log(Cores.Roxo); // 1
//----------------------------------------------------------------------------------
// Trabalhando com a união dos enums
var Comidas;
(function (Comidas) {
    Comidas["Arroz"] = "Arroz";
    Comidas["Feijao"] = "Feij\u00E3o";
    Comidas["Carne"] = "Carne";
})(Comidas || (Comidas = {}));
(function (Comidas) {
    Comidas["Macarrao"] = "Macarr\u00E3o";
    Comidas["Pure"] = "Pure";
    Comidas["Salada"] = "Salada";
})(Comidas || (Comidas = {}));
console.log(Comidas);
