const express=require("express");

const app=express();


app.get("/",(req,res)=>{
   

  res.send("<h2>Hey ,this is Arish..</h2>")
})

const port=3001;
app.listen(port,()=>{
  console.log(port);
})
