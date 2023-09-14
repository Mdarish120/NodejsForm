const express=require("express");

const router=express.Router();

router.get('/', (req, res) => {
    res.send(`
      <h2>Hello , this is Express js
    `);
  });
  


module.exports=router;