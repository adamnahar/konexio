var fs = require("fs");

fs.readFile("./jour8.txt", function(error, data) {
    console.log(data.toString());
})