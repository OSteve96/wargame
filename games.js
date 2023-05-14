
class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck() {

        let suits = ['clubs', 'hearts', 'spades', 'diamonds'];
        let levels = [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king' ];
       // let values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
        for (let i=0; i<suits.length; i++){
            for(let j=0; j<levels.length; j++){
                this.cards.push();
            }
        }

    }
    shuffleDeck() {
       /* (let loct1, loct2, tmp;
        for(let i=cards.length; i>0; i--){
            loct1 = Math.floor((Math.random()*this.cards.length));
            loct2 = Math.floor((Math.random()*this.cards.length));
            tmp = this.cards[loct1];
           // this.cards[loct1]=this.cards[loct2];
            //this.cards[loct2]=tmp;
        }
)*/for (let i = this.cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));
    let temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
    }
}
}

class Card {
    constructor() {
        this.suit = [];
        this.level = [];
        //this.value = [];
    }

}

class Board {
    constructor () {
        this.raceGames = [];
        this.players = [];
    }
    start(playerOne, playerTwo) {
        //let name = prompt("Enter name for players: ");
           // this.name.push(new Player(name));
        this.players.push(new Player(playerOne));
        this.players.push(new Player(playerTwo));
        let set = new Deck();
        set.createDeck();
        set.shuffleDeck();
        this.players[0].playerCards = set.cards.slice(0, 26);
        this.players[1].playerCards = set.cards.slice(26, 52);
    }
}

let wars = new Board();
wars.start( 'john', 'steven');
console.log(wars);

