const axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
const moment = require("moment");
var Spotify = require('node-spotify-api');
let searchTermHyphen = process.argv.slice(3).join("-");
let searchTermSpace = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);
var seatgeek = new SeatGeek(keys.seatgeek);

function SeatGeek(keys) {
    this.URL = `https://api.seatgeek.com/2/events?client_id=${keys.id}&performers.slug=${searchTermHyphen}`;
};

if (process.argv[2] === "concert-this") {
    axios.get(seatgeek.URL).then(function (response) {
        const answer = response.data.events[0];
        console.log(answer.venue.name);
        console.log(answer.venue.extended_address);
        //formatting date with moment
        console.log(moment(answer.datetime_utc).format("MM/DD/YYYY"));
    });
};

if (process.argv[2] === "spotify-this-song") {

    // setting search parameter to the sign by ace of base if undeclared
    if (!searchTermSpace) {
        searchTermSpace = "The Sign Ace of Base";
    };

    spotify.search({ type: 'track', query: searchTermSpace }, function (err, data) {

        // (below) if error redo search with the sign by ace of base as search param
        if (err) {
            spotify.search({ type: 'track', query: "The Sign Ace of Base" }, (function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err)
                } else {
                    const answer = data.tracks.items[0];
                    console.log(answer.artists[i].name);
                    console.log(answer.name);
                    console.log(answer.external_urls.spotify);
                    console.log(answer.album.name);
                };
            }));
            return console.log('Error occurred: ' + err);
        };
        // (above) if error redo search with the sign by ace of base as search param

        const answer = data.tracks.items[0];

        //looping through multiple artists if they exist
        for (i = 0; i < answer.artists.length; i++) {
            console.log(answer.artists[i].name);
        };

        console.log(answer.name);
        console.log(answer.external_urls.spotify);
        console.log(answer.album.name);
    });
};





if (process.argv[2] === "movie-this") {

    // setting search parameter to My Nobody if undeclared
    if (!searchTermHyphen) {
        searchTermHyphen = "Mr-Nobody";
    };

    const URL = `http://www.omdbapi.com/?apikey=trilogy&t=${searchTermHyphen}`
    axios.get(URL).then(function (response) {
        const answer = response.data;
        console.log(answer.Title);
        console.log(answer.Year);
        console.log("IMDB rating: " +answer.Ratings[0].Value);
        console.log(answer.Country);
        console.log(answer.Language);
        console.log(answer.Plot);
        console.log(answer.Actors);
    });

};

if (process.argv[2] === "do-what-it-says") {

};