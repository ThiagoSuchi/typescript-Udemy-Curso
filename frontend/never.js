"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarError = criarError;
// Exemplo de uma function que não retorna nada a não ser um error.
function criarError() {
    throw new Error('Erro qualquer');
}
criarError();
function checarStatus(status) {
    switch (status) {
        case "pendente":
            return "O compromisso está pendente.";
        case "concluido":
            return "O compromisso foi concluído.";
        case "cancelado":
            return "O compromisso foi cancelado.";
        default:
            // Erro em tempo de compilação se `status` for um valor inesperado
            const verificaNever = status;
            return verificaNever;
    }
}
console.log(checarStatus('cancelado'));
