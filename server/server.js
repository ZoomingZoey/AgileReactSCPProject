// import dependencies
const express = require('express');
const path = require('path');

// create an instance of express
const app = express();

// set the server port to either the port set by heroku or 3001
const port = process.env.PORT || 3001;

// route to get all scp subjects
app.get('/api/scps', (req, res) => {
  // ...
});

// route to get a single scp subject by its item number (id) e.g: /api/scps/002
app.get('/api/scps/:item', (req, res) => {
  const { item } = req.params;
  console.log(`SCP-${item}`);
  // ...
});

// route to get an image by its filename from the /server/images directory
app.get('/api/images/:filename', (req, res) => {
  const { filename } = req.params;
  console.log(filename);
  res.sendFile(path.resolve(__dirname, './images', filename));
});

// any unhandled routes will return the react application
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-client-app/build', 'index.html'));
});

// tell the server to begin listening on the selected port
app.listen(port, () => console.log(`The server is listening on port ${port}`));



