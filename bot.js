require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var request = require('request');
var bandsintown = require('bandsintown')(APP_ID);
var omdb = require('omdb');
var fs = require('fs');

switch (action) {

    case "spotify-this-song":
    spotify(inputs);
    break;

    case "movie-this":
    omdb(inputs);
    break;

    case "concert-this":
    bandsintown(input);
    break;

    case "do-what-it-says":
    request(inputs);
    break;
};



