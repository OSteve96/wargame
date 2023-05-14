class Card {
    constructor() {
        this.suit = [];
        this.level = [];
        //this.value = [];
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
        //for (let i=0; i<suits.length; i++){
           // for(let j=0; j<levels.length; j++){
             //   this.cards.push();
           // }
        suits.forEach(suit => {
             levels.forEach(levels=> {
                    this.deck.push(new Card(suits, levels));
                });
            });
            return this.deck;
        
        
    }


createPlayers(numberOfPlayers) {
    let playerCount = numberOfPlayers;
    while(playerCount) {
        let newPlayer = {};
        newPlayer.name = `Player ${playerCount}`;
        newPlayer.hand = [];
        this.players.unshift(newPlayer);
        playerCount--;
    }
    return this.players;
}

shuffleDeck(deck) {
    let cardsUnshuffled = deck.length;
    let randomUnshuffled;
    let lastUnshuffled;
    while(cardsUnshuffled) {
        randomUnshuffled = Math.floor(Math.random() * cardsUnshuffled--);
        lastUnshuffled = deck[cardsUnshuffled];
        deck[cardsUnshuffled] = deck[randomUnshuffled];
        deck[randomUnshuffled] = lastUnshuffled;
    }
    return deck;
}

dealCards( deck) {

    // want to make sure each player gets the same amount
    while(deck.length >= players.length) {
        players.forEach(player => {
            let dealtCard = cardsLeft.pop();
            player.hand.push(dealtCard);         
        });
    }
}


winner (cardsToCompare) {
    // for loop used in order to associate player with card
    for(let i = 0; i < cardsToCompare.length; i++) {
        if (this.getInt(cardsToCompare[i]) > this.highCard) {
            this.highCard = this.getInt(cardsToCompare[i]);
            this.winner = this.players[i];
            this.war = false;    
        } else if (this.getInt(cardsToCompare[i]) === this.highCard) {
            
            this.war = true;
        }
    }
}
}


class Player {
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
    }
}

class Board {
    constructor () {
        this.games = [];
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
