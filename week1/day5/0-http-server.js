/**
 * New keyword: require. 
 * It is like import in java.
 * We are going to use it to bring in code from other modules. 
 */

// require the http module and save it to our variable
const http = require('http')

// createServer returns a server instance
const server = http.createServer((request, response)=>{
    console.log('incoming');
    // response.write('hello');
    // response.end(); // sends off the http request object to the client

    if (request.url === '/'){
        response.write('<h1>HOME PAGE</h1>')

        if (request.method === 'GET'){
            response.write('<h2>GET REQUEST</h2>')
        } else if (request.method === 'POST'){
            response.write('<h2>POST REQUEST</h2>')
        }
        
        response.end();

    } else if (request.url === '/animals'){
        response.write('<h1>ANIMALS PAGE</h1>')
        response.end();
    } else {
        response.writeHead('404');
        response.write('<h1>Page not found</h1>');
        response.end();
    }
})

server.listen(8080);

// CTRL + C to end what is running in terminal 