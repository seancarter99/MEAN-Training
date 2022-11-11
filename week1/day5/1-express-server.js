const express = require('express');
const { nextTick } = require('process');

// app is our web application
const app = express();
const PORT = 8081; // typically read from env

// middleware : function that will run before each method
app.use(express.json());

const customMiddleware = (req, res, next) => {
    console.log('verified user is logged in')
    next(); // built in express method to call the next middleware in the stack
}

app.use(customMiddleware); // use middleware for entire app. 
//if I only want to use on certain routes 
// app.get('/', MiddlewareGoesHere, (req,res)=>{ code block })

app.get('/', (req,res)=>{
    // req.method will be get as this route is servicing get requests
    // just demonstrating pulling info from the request object
    console.log(`incoming ${req.method} request`);
    res.send('<h1>Welcome to our home page</h1>')
})

app.post('/', (req, res)=>{
    // check if user is logged in before allowing this route -> use case for middleware
    console.log(`incoming ${req.method} request`);
    console.log(req.headers);
    res.send('post request');
})

// get all animals
app.get('/animals', (req,res)=>{
    console.log(`incoming ${req.method} request`);
    // res.send('<h1>Animals page</h1>')
    res.json({user: 'haley'});
})

// animals page in english
app.get('/animals/en', (req,res)=>{
    console.log(`incoming ${req.method} request`);
    res.send(`<h1>English Animals page</h1>`)
})

// get ONE animal
// if I am going to have other routes with the same prefix, need to come before the ":" statement as this will catch all
// i.e. /animals/en needs to come before this
app.get('/animals/:id', (req,res)=>{
    const {id} = req.params;
    console.log(`incoming ${req.method} request`);
    console.log(id);
    res.send(`<h1>This is animal ${id}</h1>`)
})

app.post('/animals', (req, res)=> {
    console.log(req.body);
    res.send('this is a post request to animals');
})

app.post('/login', (req, res)=> {
    // destructuring from the request body
    const { username, password } = req.body;
    console.log(req.body);
    // res.send('this is a login request');
    res.send(`hello ${username}`)
})

// we are servicing ALL http methods with app.all
// * is the wildcard - aka all URL endpoints 
// has to be the last route bc it services all endpoints
app.all('*', (req, res)=>{
    console.log('request received');
    // need to send response back or request hangs
    res.status(404).send('404 not found');
})

// listen on port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})