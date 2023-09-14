const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up a route to show the form
app.get('/add-product', (req, res) => {
  res.send(`
    <form action="/add-product" method="post">
      <input type="text" name="productName" placeholder="Product Name">
      <input type="text" name="productSize" placeholder="Product Size">
      <button type="submit">Add Product</button>
    </form>
  `);
});

// Handle form submission
app.post('/add-product', (req, res) => {
const {productName,productSize}=req.body;

  console.log('Product Name:', productName);
  console.log('Product Size:', productSize);

  res.send('Product added successfully.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
