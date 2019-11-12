const axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
const searchTerm = process.argv.slice(3).join("-");
//var spotify = new Spotify(keys.spotify);
var seatgeek = new SeatGeek(keys.seatgeek);

function SeatGeek(keys) {
    this.URL = `https://api.seatgeek.com/2/events?client_id=${keys.id}&performers.slug=${searchTerm}`;
};

if (process.argv[2] === "concert-this") {
    axios.get(seatgeek.URL).then(function(response) {
        console.log(response.data);
    });

};

if (process.argv[2] === "spotify-this-song") {
    
};

if (process.argv[2] === "movie-this") {
    
};

if (process.argv[2] === "do-what-it-says") {
    
};