var wordBank = ["DANERYS TARGARYEN", "VISERYS TARGARYEN", "RHAEGAR TARGARYEN", "AERYS TARGARYEN", "JON SNOW", "ARYA STARK", "SANSA STARK", "BRAN STARK",
    "TYRION LANNISTER", "JAIME LANNISTER", "CERSEI LANNISTER", "TYWIN LANNISTER", "MARGAERY TYRELL", "OLENNA TYRELL", "DAVOS SEAWORTH",
    "ARTHUR DAYNE", "THEON GREYJOY", "EURON GREYJOY", "YARA GREYJOY", "BRONN", "RAMSAY BOLTON", "ROOSE BOLTON", "STANNIS BARATHEON",
    "ROBERT BARATHEON", "RENLY BARATHEON", "PETYR BAELISH", "VARYS", "JORAH MORMONT", "SAMWELL TARLY", "EDDARD STARK", "CATELYN STARK",
    "BERIC DONDARRION"
]


var wins = 0;

var chances = 10;

var word = wordBank[Math.floor(Math.random() * wordBank.length)];

var wordLength = word.length;

var gameStatus = 0;

var blanks = "";

var blanksData = "";

function wordSelector(resetGame) {

    for (var i = 0; i < wordLength; i++) {
        if (word.charAt(i) === " ") {
            blanks += "&nbsp&nbsp&nbsp";
            blanksData += "   ";
        } else {
            blanks += "_ ";
            blanksData += "_ "
        }
    }

    gameStatus = 1;

}


document.onkeyup = function(event) {

	if (gameStatus === 0) {
        wordSelector();
    } else {

		}

    var userGuess = event.key;

    var userGuess = userGuess.toUpperCase();

    console.log(word);

    var blanksSet = blanksData.split("");

    for (var j = 0; j < blanksSet.length; j++) {
        if (userGuess === word.charAt(j)) {
        	blanksSet.splice(j, 1, userGuess);
        }
    }

    if (word.indexOf(userGuess) === -1) {
        chances--;
    }

    var blanks = blanksSet.join("");

	var html = 

	"<p>" + blanks + "</p>" +

	"<p> Wins: " + wins + "</p>" +

	"<p> Chances: " + chances + "</p>";

	document.querySelector("#game").innerHTML = html;

}


