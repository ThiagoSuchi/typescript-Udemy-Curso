// 1 - GET fetch
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    })

// 2 - GET axios
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
        console.log(response.data);
    })
    .catch(e => {
        console.log(e);
    })

// 3 - POST com fetch
const data = {
    title: "Algum título",
    content: "Algum conteúdo...",
    userId: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// 4 - POST com axios
const data2 = {
    title: "Algum outro título",
    content: "Algum outro conteúdo...",
    userId: 2
}

axios.post("https://jsonplaceholder.typicode.com/posts", data2)
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log(err);
    })