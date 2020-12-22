// 01 - objet

var cat = {
    name: "Garfield",
    Age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.Age);
console.log(cat["Age"]);
if (cat.isCute===true){
    console.log("So cute !");
}

// 02 - combine

var cat2 = {
    name: "Felix",
    age: 20,
    isCute: false
};
console.log(cat2);
var cat =[cat2];
console.log(cat.age,cats[0].age);
console.log(cat2.isCute, cats[1].isCute);


// 03 - even

function checkIfEven(num){
    if (num % 2 ===0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
checkIfEven(3);
checkIfEven(4);
checkIfEven(543);
checkIfEven(86734319);

// 04 - Compare

function Compare(num1, num2) {
    if (num1 > num2) {
        console.log(`|§{num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`§{num2} is bigger`);
    } else {
        console.log("Both are the same");
    }
}

// 05 - Add up 

function addUp(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
var result = addUp(12);
console.log(result);
addUp(12);

// 06 - Time

function format (num) {
    console.log(Math.floor(num / 3600));
    console.log(Math.floor(num / 60));
    console.log(num % 60);
}
