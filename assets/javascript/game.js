var wordBank = ["DANERYS TARGARYEN", "VISERYS TARGARYEN", "RHAEGAR TARGARYEN", "AERYS TARGARYEN", "JON SNOW", "ARYA STARK", "SANSA STARK", "BRAN STARK",
    "TYRION LANNISTER", "JAIME LANNISTER", "CERSEI LANNISTER", "TYWIN LANNISTER", "MARGAERY TYRELL", "OLENNA TYRELL", "DAVOS SEAWORTH",
    "ARTHUR DAYNE", "THEON GREYJOY", "EURON GREYJOY", "YARA GREYJOY", "BRONN", "RAMSAY BOLTON", "ROOSE BOLTON", "STANNIS BARATHEON",
    "ROBERT BARATHEON", "RENLY BARATHEON", "PETYR BAELISH", "VARYS", "JORAH MORMONT", "SAMWELL TARLY", "EDDARD STARK", "CATELYN STARK",
    "BERIC DONDARRION"];

var word = "";

var wins = 0;

var chances = 10;

var wordLength = 0;

var gameStatus = 0;

var blanks = "";

var blanksData = "";

var blanksSet = "";

function wordSelector(resetGame) {

	word = wordBank[Math.floor(Math.random() * wordBank.length)];

	wordLength = word.length;

    for (var i = 0; i < wordLength; i++) {
        if (word.charAt(i) === " ") {
            blanks += "&nbsp&nbsp&nbsp";
            blanksData += " ";
        } else {
            blanks += "_ ";
            blanksData += "_"
        }
    }

  	blanksSet = blanksData.split("");

    gameStatus = 1;

}

document.onkeyup = function(event) {

	if (chances === 0) {
		return
	}

	if (gameStatus === 0) {
        wordSelector();
    } else {

		}

    var userGuess = event.key;

    var userGuess = userGuess.toUpperCase();

    console.log(word);

    console.log(blanksSet.length);

    for (var j = 0; j < blanksSet.length; j++) {
        if (userGuess === word.charAt(j)) {
        	blanksSet.splice(j, 1, userGuess);
        }
    }

    if (word.indexOf(userGuess) === -1) {
        chances--;
    }

    blanks = display(blanksSet);

	var html = 

	"<p>" + blanks + "</p>" +

	"<p> Wins: " + wins + "</p>" +

	"<p> Chances: " + chances + "</p>";

	document.querySelector("#game").innerHTML = html;

//record splicing, 
//also do check else if number the numbers of time splice has happened is equal to word length
//reset game status to 0
//query select to provide you win message to continue
//get rid of data from each round of play

}

function display (set) {
	var display = "";
	for (var i = 0; i < set.length; i++) {
		if (set[i] === "_") {
			display += "_ ";
		}	else if (set[i] != " ") {
			display += set[i] + " ";
		}
			else {
			display += "&nbsp&nbsp&nbsp";
		}
	}
	return display;
}



