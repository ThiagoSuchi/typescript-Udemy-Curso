import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;


form.addEventListener('submit', function(e) {
    e.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2)
    if(shouldSentForm(this)) console.log('Formulario enviado...');
    
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if(!input.value) {
            showErrorMessages(input, 'Este campo não pode ficar vazio.')
        }
    })
}

function checkEmail(input: HTMLInputElement): void {
    if(email.value && !isEmail(input.value)) showErrorMessages(input, 'Email inválido')
}

function checkEqualPasswords(pass1: HTMLInputElement, pass2: HTMLInputElement): void {
    if(pass1.value !== pass2.value) {
        showErrorMessages(pass2, 'A senhas estão diferentes')
    }
}

function hideErrorMessages(form: HTMLFormElement): void {
    form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES))
};

function showErrorMessages(input: HTMLInputElement, msg: string): void {
    const formFilds = input.parentElement as HTMLDivElement;
    const errorMessage = formFilds.querySelector('.error-message') as HTMLSpanElement;

    errorMessage.innerText = msg;
    formFilds.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSentForm(form: HTMLFormElement): boolean {
    let send = true;
    form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
    return send;
}