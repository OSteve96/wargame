class Board {
    constructor(){
        this.raceGames = [];
        this.players = [];
    }
    start(playerNameOne, playerNameTwo){
        this.players.push(new Player(playerNameOne));
        this.players.push(new Player(playerNameTwo));
        let newDecks = new Deck();
        newDecks.createDeck();
        newDecks.shuffleDeck();
        this.players[0].playerCards =newDecks.cards.slice(0, 26);
        this.players[1].playerCards = newDecks.cards.slice(26, 52);
    }
}
class Player {
    constructor(name){
        this.playerName = name;
        this.playerCards = [];
    }
}

class Card {
    constructor(suit, level, value){
        this.suit = suit;
        this.level = level;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck() {

        let suits = ['clubs', 'hearts', 'spades', 'diamonds'];
        let levels = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king' ];
        let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        for (let i=0; i<suits.length; i++){
            for(let j=0; j<levels.length; i++){
                this.cards.push(new Card(suits[i], levels[j]), values[j]);
            }
        }

    }
    shuffleDeck(){
        let loct1, loct2, tmp;
        for(let i=0; i<1000; i++){
            loct1 = Math.floor((Math.random()*this.cards.length));
            loct2 = Math.floor((Math.random()*this.cards.length));
            tmp = this.cards[loct1];
            this.cards[loct1]=this.cards[loct2];
            this.cards[loct2]=tmp;
        }

    }
}

let board= new Board();
board.start();
