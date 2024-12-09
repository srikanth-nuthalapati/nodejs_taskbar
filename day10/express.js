const express = require("express");
const app = express();


app.get("/products/:id",(req,res)=>{
   console.log(req.params);
   console.log(req.query);
   res.end();
}).listen(3000,()=>{
    console.log("server is running on port 3000");
})

