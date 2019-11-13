const axios = require("axios");
require("dotenv").config();
var keys = require("./keys.js");
const moment = require("moment");
var Spotify = require('node-spotify-api');
const searchTermConcert = process.argv.slice(3).join("-");
let searchTermSpotify = process.argv.slice(3).join(" ");
var spotify = new Spotify(keys.spotify);
var seatgeek = new SeatGeek(keys.seatgeek);

function SeatGeek(keys) {
    this.URL = `https://api.seatgeek.com/2/events?client_id=${keys.id}&performers.slug=${searchTermConcert}`;
};

if (process.argv[2] === "concert-this") {
    axios.get(seatgeek.URL).then(function (response) {
        const answer = response.data.events[0];
        console.log(answer.venue.name);
        console.log(answer.venue.extended_address);
        console.log(moment(answer.datetime_utc).format("MM/DD/YYYY"));
    });
};

if (process.argv[2] === "spotify-this-song") {
    if (!searchTermSpotify) {
        searchTermSpotify = "The Sign Ace of Base";
    };
    spotify.search({ type: 'track', query: searchTermSpotify }, function (err, data) {
        if (err) {
            spotify.search({ type: 'track', query: "The Sign Ace of Base" })
                .then(function (data) {
                    const answer = data.tracks.items[0];
                    for (i = 0; i < answer.artists.length; i++) {
                        console.log(answer.artists[i].name);
                    };
                    console.log(answer.name);
                    console.log(answer.external_urls.spotify);
                    console.log(answer.album.name);
                };

        });
};

if (err) {
    return console.log('Error occurred: ' + err)
} else {
    const answer = data.tracks.items[0];
    for (i = 0; i < answer.artists.length; i++) {
        console.log(answer.artists[i].name);
    };
    console.log(answer.name);
    console.log(answer.external_urls.spotify);
    console.log(answer.album.name);
};
}).then(function (response) { return console.log('Error occurred: sss' + err) });

if (process.argv[2] === "movie-this") {

};

if (process.argv[2] === "do-what-it-says") {

};