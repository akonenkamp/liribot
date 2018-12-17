require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var request = require('request');
var bandsintown = require('bandsintown')(APP_ID);
var omdb = require('omdb');
var fs = require('fs');

switch (action) {

    case "spotify-this-song":
        spotify(input);
        break;

    case "movie-this":
        omdb(input);
        break;

    case "concert-this":
        bandsintown(input);
        break;

    case "do-what-it-says":
        request(input);
        break;
};

function spotify(input) {
    var spotify = new Spotify(keys.spotify);
    if (!input) {
        input = "the sign";
    }

    spotify.search({ type: 'track', query: input}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });

}
