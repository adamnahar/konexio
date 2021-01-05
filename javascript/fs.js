//01 file system

var fs = require("fs");
fs.readFile("./jour7.txt", function(error, data){
    console.log(data.toString());
})

//02 map double

var x = [1, 2, 3, 4, 5];
var doubles = x.map(function(num) {
  return num * 2;
});
console.log(doubles);

//03 map Names

//03  map names
var longName = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith",
	}
]
var shortName = shortName.map(function(name){


[
	{
		name: "Jane Doe"
	},
	{
		name: "John Smith"
	}
]
 console.log(shortName);


//04 - Filter Numbers


//05 filter event

//06 Cake

