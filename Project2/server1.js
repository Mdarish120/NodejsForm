const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      // Read messages from the file
      fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        // Split the messages into an array
        const messages = data.split('\n').filter(Boolean);

        // Send an HTML form with messages displayed at the top
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body>');
        res.write('<h1>Chat Room</h1>');
        res.write('<form method="post" action="/add-message">');
        res.write('<textarea name="message" rows="4" cols="50"></textarea><br>');
        res.write('<input type="submit" value="Add Message">');
        res.write('</form>');
        res.write('<h2>Messages</h2>');
        res.write('<ul>');
        messages.forEach((message) => {
          res.write(`<li>${message}</li>`);
        });
        res.write('</ul>');
        res.write('</body></html>');
        res.end();
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  } else if (req.method === 'POST' && req.url === '/add-message') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      // Extract the message from the POST data
      const message = url.parse(`?${body}`, true).query.message;

      // Read existing messages from the file
      fs.readFile('messages.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        // Split the existing messages into an array
        const messages = data.split('\n').filter(Boolean);

        // Add the new message to the beginning of the array
        messages.unshift(message);

        // Write the updated messages back to the file
        fs.writeFile('messages.txt', messages.join('\n'), 'utf8', (err) => {
          if (err) {
            console.error(err);
            return;
          }

          // Redirect back to the main page after adding a message
          res.writeHead(302, { 'Location': '/' });
          res.end();
        });
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
