const functions = require('@google-cloud/functions-framework');
const path = require('path');

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('home', (req, res) => {
    console.log("hello");
    res.sendFile(path.join(__dirname, 'index.html'));
});