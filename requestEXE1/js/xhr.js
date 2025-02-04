// Verbo - GET
var xhr = new XMLHttpRequest();
var documento;

// Isso define que tipo de doc ele irá retornar por padrao
xhr.responseType = 'json';

// Evento que captura oque irá acontecer quando o estado mudar
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        documento = xhr.response; // .response pega apenas o conteudo 
        console.log(documento);
    }
}

// Aqui eu passo qual o verbo e qual a url
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1');

// E envio toda configuração feito acima
xhr.send();


// Verbo - POST
var xhr2 = new XMLHttpRequest();
var documento2 = {
    "userId": 10,
    "id": 1,
    "title": "Nova IA criada pela china, gera dor de cabeça aos Estados Unidos",
    "body": "Nova ia chamada DeepSeek feita por uma pequena firma de 200 funcionários na china, gera dívida de 600bi de dolares nas empresas dos Estados Unidos."
}

xhr2.onreadystatechange = function () {
    if (xhr2.readyState === 4) {
        console.log(xhr2);
    }
}

xhr2.open('POST', 'https://jsonplaceholder.typicode.com/posts');

xhr2.send(documento2)