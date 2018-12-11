var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: 'akonenkamp',
    secret: '3Xy217589?'
});

spotify
    .search({ type: 'track', query: 'All the Small Things' })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    });