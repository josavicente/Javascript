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




crearDeck();


