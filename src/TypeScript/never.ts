// Exemplo de uma function que não retorna nada a não ser um error.
export function criarError(): never {
    throw new Error('Erro qualquer');
}

criarError();

// O never é um tipo que indica "ausência de valor" e é utilizado principalmente em funções que não retornam (como exceções) e em verificações de tipos para garantir segurança em tempo de compilação.

type Status = "pendente" | "concluido" | "cancelado";

function checarStatus(status: Status): string {
    switch (status) {
        case "pendente":
            return "O compromisso está pendente.";
        case "concluido":
            return "O compromisso foi concluído.";
        case "cancelado":
            return "O compromisso foi cancelado.";
        default:
             // Erro em tempo de compilação se `status` for um valor inesperado
            const verificaNever: never = status;
            return verificaNever;
    }
}

console.log(checarStatus('cancelado'));
