const express = require('express');
const fs = require('fs-extra');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  // Store the username in local storage
 
  res.redirect('/');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/send', (req, res) => {

  const username = req.body.username;
  const message = req.body.message;
  const data = `${username}: ${message}\n`;

  // Append the message to a file
  fs.appendFile('chat.txt', data, (err) => {
    if (err) throw err;
    console.log('Message saved to chat.txt');
  });

  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
