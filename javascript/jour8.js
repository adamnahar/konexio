var request = require("request");
request.get("https://restcountries.eu/rest/v1/all" , function(error, response, body){
    var all=JSON.parse(body);
    console.log(all);
    var countriesNames = []
})