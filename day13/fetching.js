const express = require("express");
const fs = require("fs")
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());

app.post("/products",async(req,res)=>{
   let api = await fetch('https://fakestoreapi.com/products/')
   let data = await api.json();
   fs.writeFile("db.json",JSON.stringify(data),"utf-8",(err,data)=>{
    if(err) console.log(err)
    else console.log("created");
   })
   res.end();
});

app.get("/products",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        if(err) res.send(err.message)
        else res.send(data)
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});