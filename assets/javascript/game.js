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

var winCountdown = "";

var userLettersGuessed = [];

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

    winCountdown = blanksSet.length;

    gameStatus = 1;

}

function display (set) {
    var display = "";
    for (var i = 0; i < set.length; i++) {
        if (set[i] === "_") {
            display += "_ ";
        }   else if (set[i] != " ") {
            display += set[i] + " ";
        }
            else {
            display += "&nbsp&nbsp&nbsp";
        }
    }
    return display;
}


document.onkeyup = function(event) {

    console.log(word);

    var userGuess = event.key;

	if (chances === 0) {
		return
	}

    if (userGuess === " " ) {

	       if (gameStatus === 0) {
            wordSelector();
            } else {
	   }
        
    }

    var userGuess = userGuess.toUpperCase();

    for (var j = 0; j < blanksSet.length; j++) {
        if (userGuess === word.charAt(j)) {
        	blanksSet.splice(j, 1, userGuess);
            winCountdown--;
        }
    }

    if (winCountdown === 0) {
        wins++;
        gameStatus: 0;
        word = "";
        blanks = "";
        blanksData = "";
        blanksSet = "";
        wordSelector();
    }

    if (word.indexOf(userGuess) === -1 && userLettersGuessed.indexOf(userGuess) === -1) {
        chances--;
        userLettersGuessed.push(userGuess);
    }

    if (chances === 0) {
        alert("you lose!");
    }

    blanks = display(blanksSet);

	var html = 

	"<p>" + blanks + "</p>" +

	"<p> Wins: " + wins + "</p>" +

	"<p> Chances: " + chances + "</p>";

	document.querySelector("#game").innerHTML = html;
}


