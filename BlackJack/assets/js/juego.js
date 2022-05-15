/**
 * 
 * 2C 2 of Clubs (Tréboles)
 * 2D 2 of Diamonds (Diamantes)
 * 2H 2 of Hearts (Corazones)
 * 2S 2 of Spades (Espadas)
 * 
 */


/* Creating an empty array. */

let deck = [];
/* Creating an array with the types of cards. */
const tipos = ['C', 'D', 'H', 'S']; 
/* Creating an array with the special cards. */
const especiales = ['A', 'J', 'Q', 'K']; 

const crearDeck = () => {

    /* Creating a deck of cards. */
    for(let i = 2; i<= 10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    /* Creating the special cards. */
    for(let espc of especiales){
        for(let tipo of tipos){
            deck.push(espc + tipo);
        }
    }
    
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}

const pedirCarta = () => {

    /* Checking if the deck is empty. If it is, it will throw an error. */
    if ( deck.length == 0 ) {
        throw 'No hay cartas'
    }
    /* Taking the last card of the deck. */
    const carta = deck.pop();
    return carta;
}


const valorCarta = (carta) => {
    /* The above code is checking if the value of the card is a number or a letter. If it is a number,
    it returns the value of the card. If it is a letter, it returns the value of the letter. */
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ?  ( ( valor === 'A') ? 11 : 10 ) : valor * 1;
}

valorCarta('10C');

/* Creating a deck of cards. */
crearDeck();
/* Taking the last card of the deck. */
const carta = valorCarta(pedirCarta());
console.log(carta);



