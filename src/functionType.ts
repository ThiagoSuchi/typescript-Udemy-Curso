// Função de tipo(Type of function):
type MapStringCallback = (item: string) => string;

function stringUpperCase (array: string[], callback: MapStringCallback): string[] {
    const newArray: string[] = [];

    for(let i = 0; i < array.length; i++) {
        const item = array[i]
        newArray.push(callback(item));
    }

    return newArray;
}

const abc = ['a','b','c']
const abcMapped = stringUpperCase(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMapped);

console.log('-----------------------OU-----------------------');

// de uma forma mais básica e desmontada:
function stringUpperCase2 (array: string[], callback: CallableFunction): string[] {
    const newArray: string[] = [];

    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    }

    return newArray;
}

const abc2 = ['a','b','c']
const abcMapped2 = stringUpperCase(abc, function(item: any) {
    return item.toUpperCase();
})

console.log(abc2);
console.log(abcMapped2);


