// import functions from handler.js
const {addTripData} = require('./handler') ;
const {getApiKey} = require('./handler') ;
const {getTripData} = require('./handler') ;

// Setup dotenv
const dotenv = require('dotenv');
dotenv.config();

const http =require('http');

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening (){
    console.log('server running');
    console.log(`running on localhost: ${port}`)
}

// open this address in browser http://localhost:3000

// Add a GET route that returns the tripData object
app.get('/getTrip', getTripData );

// Add a POST route that adds incoming data to tripData
app.post('/addTrip', addTripData);

// Add a GET route that returns the API Keys
app.get('/apiKey', getApiKey );


