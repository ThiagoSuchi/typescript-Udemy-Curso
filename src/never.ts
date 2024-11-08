export function criarError(): never {
    throw new Error('Erro qualquer');
}

criarError();

// O never é um tipo que indica "ausência de valor" e é utilizado principalmente em funções que não retornam (como exceções) e em verificações de tipos para garantir segurança em tempo de compilação.