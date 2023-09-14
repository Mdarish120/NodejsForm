const express=require("express");


const router=express.Router();

router.get('/add-product', (req, res) => {
    res.send(`
      <form action="/admin/add-project" method="post">
        <input type="text" name="productName" placeholder="Product Name">
        <input type="text" name="productSize" placeholder="Product Size">
        <button type="submit">Add Product</button>
      </form>
    `);
  });
  
  // Handle form submission
  router.post('/add-project', (req, res) => {
  const {productName,productSize}=req.body;
  
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
  
    res.send('Product added successfully.');
  });


module.exports=router;