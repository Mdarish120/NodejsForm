const express = require('express');
const bodyParser = require('body-parser');
const adminRoute=require("./routes/admin");
const shopRoute=require("./routes/shop");
const app = express();

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up a route to show the form
 app.use("/admin",adminRoute);
 app.use(shopRoute);


 app.use((req,res,next)=>{
  res.send("Page not fond");
 })

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
