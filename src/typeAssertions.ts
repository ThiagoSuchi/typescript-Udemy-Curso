/*
  Type assertions são úteis para indicar ao TypeScript qual é o tipo correto de uma variável em contextos
onde ele não consegue inferir sozinho.
*/

//------------------------- RECOMENDADO --------------------------------------
// Condicional
const body = document.querySelector('body');
if(body) body.style.background = 'blue';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'EAE gurizão!';
input.focus();

//---------------------------- NÂO RECOMENDADO --------------------------------
// Type assertion
const body4 =(document.querySelector('body') as unknown) as number;

// Non-null assertion(!)
const body2 = document.querySelector('body')!;
body2.style.background = 'blue';




