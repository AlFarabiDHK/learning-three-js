// create an express server with the express module
var express = require('express');   // express module
var app = express();                // express app
var port = 5000;                // port number
app.use(express.static('public_html'));
app.listen(port, () => 
console.log(`App listening at http://localhost:${port}`));