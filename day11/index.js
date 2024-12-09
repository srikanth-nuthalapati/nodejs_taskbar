const otp = require("../otp");
const express = require("express");
const app = express();
const { Filter } = require("./filtering")
const {sort} = require("./sort");

    app.get("/otp",(req,res)=>{
    let code = otp();
    res.send(code);
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})

app.get("/products",async(req,res)=>{
    let api = await fetch("https://fakestoreapi.com/products/");
    let data = await api.json();
    if (Object.keys(req.query).length > 0) {
        data = Filter(data,req.query.cat);
        if(req.query.sort)
        data = sort(data,req.query.sort);
        res.json(data);
    }
    else {
        if(req.query.sort)
        data = sort(data,req.query.sort);
        res.json(data);
    }
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})





 

