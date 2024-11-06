// Types em function
function soma (x: number, y: number): number {
    return x + y;
}

const result = soma(2, 3);
console.log(result);

// função lambda ou função de seta
const soma2: (x: number, y: number) => number = (x, y) => x + y;
