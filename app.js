const express = require('express');
const bodyParser = require('body-parser');
var add = require('./index');

const app = express();

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(index.html);
  });

// Define a route to handle the form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const pages = req.body.pages;
  const read = req.body.read;
  add.addBookToLibrary(name,author,pages,read);
  //res.send(`Received form data: Name - ${name}, Email - ${email}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});