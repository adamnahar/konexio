//number
var integer = 102;
console.log(integer);

var float = 13.9;
console.log(float);

//convert

var basic =34.
var stringified =basic.toString();
console.log("convert :", stringified.length);

//round
var num = 1.5;
var rounded = Math.round(num);
console.log("Round :", rounded);

//arithmetique
var test = 12;
var bis =5;
console.log("Arithmétique" , test +bis, test - bis,test * bis,test / bis, test ** bis, test % bis);

// comparation

var test = 143;
var bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test == bis);
console.log(test === bis);
console.log(test != bis);
console.log(test !== bis)

// numero telephone
var number = 0123456789;
var stringiefiedNumber = number.toString();
if (stringiefiedNumber.length === 10 && stringiefiedNumber.charAt(0)) {
    console.log("C'est un bon numéro de téléphone");
} else {
    console.log("Mauvais numéro");
}


// Conversion en string
var number1 = 1.63283946;
console.log("Conversion de nombre en string: ", number1.toFixed(2));
var number2 = 23;
console.log(number1 + number2);
console.log(number1.toString() + number2.toString());



// 06- Condition
var limit = 50;
var score = 64;
if (score >= limit) {
    console.log("Good");
} else {
    console.log("Wrong");
}

// 07 - Condition II

var password = "azerty";
if (password.length > 5) {
    console.log("Password is secured");
}

// 08 - Combinaison de condition

console.log("Resultat de la premiere condition:", score >= limit);
console.log("Resultat de la deuxieme condition:", password.length > 5);

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Somehting is good");
} else {
    console.log("Nothing is good");
}

