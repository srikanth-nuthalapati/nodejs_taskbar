const express = require("express");
const app = express();


app.get("/products",async(req,res)=>{
    let api = await fetch("https://fakestoreapi.com/products/");
    let data = await api.json();
    if (Object.keys(req.query).length > 0) {
        let limit = parseInt(req.query.limit) || data.length;
        let skip = parseInt(req.query.offset) || 0;
        data = data.slice(skip,limit + skip);
        res.send(JSON.stringify(data));
    }
    else{
        res.json(data);
    }
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})

