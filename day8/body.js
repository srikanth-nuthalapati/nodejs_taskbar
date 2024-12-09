const http = require("http");


const server = http.createServer(async(req,res)=>{
    let body = "";
    req.on("data",(chunks)=>{
        body += chunks.toString();
    })
    req.on("end",()=>{
        console.log(body); 
        res.write(JSON.stringify(body)); 
        res.end(); 
    })
   
}).listen(3000,()=>{
    console.log("Server is running on port 300");
})