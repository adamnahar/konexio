// 01 - countries
var request = require("request");
request.get("https://restcountries.eu/rest/v1/all" , function(error, response, body){
    var all=JSON.parse(body);
    console.log(all);
    var countriesNames = []
})

// 02 - chuck norris
request.get("https://api.chucknorris.io/jokes/random", function(error, response, body){
    var getFact= JSON.parse(body);
    console.log(getFact.value);
})
// 03 -pokemon
