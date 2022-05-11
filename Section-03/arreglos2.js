
let videojuegos = ['Zelda', 'Mario', 'Metroid'];
console.log('Largo: ', videojuegos.length);

let primero = videojuegos[0];
let ultimo = videojuegos[videojuegos.length - 1];

console.log('Primero: ', primero);
console.log('Ultimo: ',ultimo);

videojuegos.forEach( (elemento, indice, arr) => {

    console.log({elemento, indice, arr});
});

let nuevaLongitud = videojuegos.push('F-Zero');


console.log(nuevaLongitud);

videojuegos.unshift('Pokemon');

videojuegos.forEach( (elemento, indice, arr) => {

    console.log({elemento, indice, arr});
});

let ultimoPop = videojuegos.pop();

console.log(ultimoPop);
