"use strict";
// Structural type => sistema de login:
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
const bdUser = { username: 'Carlin', password: '202012' };
const sentUser = { username: 'Carlin', password: '202012' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
