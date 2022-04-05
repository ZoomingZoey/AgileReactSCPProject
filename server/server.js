// import dependencies
const express = require('express');

// create an instance of express
const app = express();

// set the server port to either the port set by heroku or 3001
const port = process.env.PORT || 3001;

// create a test response on the api route
app.get('/api', (req, res) => {
  res.end('Hello World');
});

// tell the server to begin listening on the selected port
app.listen(port, () => console.log(`The server is listening on port ${port}`));



