class validaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
    }

    camposValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            // O previousElementSibling é uma propriedade usada para acessar o elemento irmão anterior de um determinado elemento dentro do DOM.

            if (!campo.value) {
                this.criarErro(campo, `Campo ${label} não pode estar vazio.`)
                valid = false
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length > 12 || usuario.length > 12) {
            this.criarErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
            valid = false
        }
        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criarErro(campo, 'O nome de usuário deve conter apenas letras e/ou números')
            valid = false
        }

        return valid;
    }

    criarErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
        // O método insertAdjacentElement é usado para inserir um elemento em uma posição
        // específica em relação a outro elemento no DOM. Ele permite controlar exatamente
        // onde o novo elemento será adicionado, sem precisar manipular diretamente o innerHTML
        // ou outros métodos menos precisos.
    }
}

const valida = new validaFormulario()