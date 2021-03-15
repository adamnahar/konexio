function calculate2(number1, number2, operator) {
    switch (operator) {
        case "+" : {
            return number1 + number2;
        }
        case "-" : {
            return number1 - number2;
        }
        case "x" : {
            return number1 * number2;
        }
        case "/" : {
            return number1 / number2;
        }
        case "%" : {
            return number1 % number2;
        }
        default: {
            console.log(`${operator} is not managed by our calculator`);
        }
    }
}

function calculate(number1, number2, operator) {
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "x") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else if (operator === "%") {
        return number1 % number2;
    } else {
        console.log(`${operator} is not managed by our calculator`);
    }
}

console.log(process.argv);

if (process.argv.length !== 5) {
    console.log("Error: I'm expecting 3 parameters");
} else {
    var result = calculate(parseInt(process.argv[2]), parseInt(process.argv[4]), process.argv[3]);
    console.log(result);
}

function multiply(number) {
    for (var i = 1; i <= 10; i++) {
        
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

multiply(parseInt(process.argv[2]));
function multiply(number) {
    for (var i = 1; i <= 10; i++) {

        console.log(`${number} x ${i} = ${number * i}`);
    }
}

function addition(number) {
    for (var i = 1; i <= 10; i++) {
    
        console.log(`${number} + ${i} = ${number + i}`);
    }
}

module.exports = {
    multiply,
    addition
}
var {multiply, addition} = require("./table-utils.js");

 

if (process.argv.length !== 4) {
    console.log("Error");
} else {
    
    multiply(parseInt(process.argv[2]));
   
    addition(parseInt(process.argv[3]));
}
var prompt = require("prompt");

var mysteryNumber = Math.floor(Math.random() * 100 + 1);

console.log(mysteryNumber);
var schema = {
    properties: {
        number: {
            description: "Quel est le nombre mystère ?",
            pattern: /^\d{1,3}$/,
            required: true,
            message: "Entrez un nombre entre 1 et 100"
        }
    }
}
function guess() {
    prompt.get(schema, (err, result) => {
        var number = parseInt(result.number);
        if (number === mysteryNumber) {
            console.log("Bravo");
        } else if (number > mysteryNumber) {
            console.log("C'est moins");
            guess();
        } else {
            console.log("C'est plus");
            guess();
        }
    })
}

prompt.start();

guess();
var prompt = require("prompt");
var randomWords = require('random-words');
var colors = require('colors');

var wordLength = 3;
var mysteryWord = randomWords({exactly: 1, maxLength: wordLength})[0];
while (mysteryWord.length !== wordLength) {
    mysteryWord = randomWords({exactly: 1, maxLength: wordLength})[0];
}

var schema = {
    properties: {
        word: {
            description: "Quel est le mot mystère ?",
            pattern: new RegExp(`^[a-z]{${wordLength}}$`),
            required: true,
            message: `Entrez un mot de ${wordLength} lettres`
        }
    }
}
function guess() {
    prompt.get(schema, (err, result) => {
        if (result.word === mysteryWord) {
            console.log("Oh yeah !!!!");
        } else {
            var answer = result.word.split("");
            var letters = {}
            for (var i = 0; i < wordLength; i++) {
                var letter = result.word[i];
                if (letter === mysteryWord[i]) {
                    answer[i] = letter.red;
                    letters[letter] = i + 1;
                } 
            }
            for (var i = 0; i < wordLength; i++) {
                var letter = result.word[i];
                 if (mysteryWord.indexOf(letter) > -1) {
                    if (letters.hasOwnProperty(letter)) {
                        if (mysteryWord.indexOf(letter, letters[letter]) > -1) {
                            answer[i] = letter.yellow;
                            letters[letter] = i + 1;
                        }
                    } else {
                        answer[i] = letter.yellow;
                        letters[letter] = i + 1;
                    }
                }
            }
            console.log(answer.join(""));
            guess();
        }
    })
}

prompt.start();

guess();