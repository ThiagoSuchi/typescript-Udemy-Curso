// Structural type => sistema de login:

type User = {username: string; password: string}; // User define um objeto de dados, com uma estrutura fixa e conhecida.
type VerifyUserFn = (user: User, sentValue: User) => boolean; // VerifyUserFn define uma função de verificação que usa User e retorna um valor boolean

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
}

const bdUser = {username: 'Carlin', password: '202012'};
const sentUser = {username: 'Carlin', password: '202012'};
const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
