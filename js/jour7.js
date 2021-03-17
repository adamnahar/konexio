var fs = require("fs");

fs.readFile("./jour8.txt", function(error, data) {
    console.log(data.toString());
})

var array = [1, 2, 3, 4, 5];
var double = array.map(function(tyudfjdc) {
    return 2 * tyudfjdc;
})

console.log(array);
console.log(double);

[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

[
	{
		name: "Jane Doe"
	},
	{
		name: "John Smith"
	}
]

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
console.log("Type de longnames:", typeof longNames[0].firstName);
console.log(longNames[0].lastName);


var shortNames = longNames.map(function(element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});

console.log(shortNames);

var shortNames = longNames.map(function(element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});


var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var even = numbers.filter(function(element) {
    return element % 2 === 0;
});
console.log(even);

[
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

var chocolatesCake = cakes.filter(function(element) {
    return element.flavor === "chocolate";
}).map(function(element) {
    element.status = "Sold out !";
    return element;
});

console.log(chocolatesCake);
