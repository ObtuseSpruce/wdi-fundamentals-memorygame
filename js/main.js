console.log("Up and Running!")

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",	
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",	
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	}
]

var cardsInPlay = [];

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

var flipCard = function() {
	cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
checkForMatch();
}
if (cardsInPlay.length === 4){
	checkForMatch();
}
	console.log("user Flipped" + cards[cardId].rank);	
	console.log(cards[cardId.suit]);
	console.log(cards[cardId].cardImage);
}


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
	}else {
		alert("sorry try again.");
	}
}


createBoard();
