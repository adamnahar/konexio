// 01 array
var fruits = ["mango","lemon","blueberry"];
console.log(fruits);
console.table(fruits);

// // 02 acess
var ingredients =["eggs","milk","butter"];
console.log(ingredients[1]);
console.log(ingredients);

// //03 add and remove
var objects=["pen","book","lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

// // 04 - order
var number =[4,10,8,12,6];
number.reverse();
console.log(number);

// // 05 - boucle
var total = 0;
var limit = 10;
for(var i = 0;i <= limit;i++){
    total = total + i
    console.log(i);
}
console.log(total)
