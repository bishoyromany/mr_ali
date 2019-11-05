const statisServer = require('static-server');


// setup the server
const server = new statisServer({
    rootPath : './dist/',
    port : 8000,
});


/**
 * when server start do this 
 */
server.start(function(){
    console.log("Server Started At Port " , server.port)
});