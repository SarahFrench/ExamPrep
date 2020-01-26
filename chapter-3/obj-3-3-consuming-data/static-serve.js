//From https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server

//doing this to overcome CORS issue when testing XMLHttpRequest locally


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8082, function(){
    console.log('Server running on 8082...');
});
