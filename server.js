const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with a status code of 200 (OK)
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Your name
  const myName = 'Mohd Arish';

  // Send your name as the response
  res.end(myName);
});

// Listen on port 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
