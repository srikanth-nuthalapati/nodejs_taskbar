const http = require("http");
const fs = require("fs");

function task2(){ // retrive data from a file and add that data to another file, again retreive data from new file and response it
    fs.readFile("donor.html","utf-8",(err,data)=>{
        if(err) console.log(err);
        else{
            console.log("file read success");
            fs.writeFile("receiver.html",JSON.stringify(data),"utf-8",(err)=>{
                if(err) console.log(err);
                else console.log("File written successfully");
            })
        }
    })

    const server = http.createServer((req,res)=>{
        if(req.method=='GET'){
            fs.readFile("receiver.html","utf-8",(err,data)=>{
                if(err){
                    res.write(JSON.stringify(err.message));
                    res.end();
                }
                else{
                    res.write(JSON.stringify(data));
                    res.end();
                }
            })
        }
    }).listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
}

function task1(){ //create new file and add fake store api data to it
    const server = http.createServer(async(req,res)=>{

        const api = await fetch("https://fakestoreapi.com/products/");
        const data = await api.json();

        if(req.method=='POST'){
            fs.writeFile("data.json",JSON.stringify(data),"utf-8",(err)=>{
                if(err) 
                    res.write(JSON.stringify(err.message));
                else
                    res.write("file created");
            })
        }
        else{
            res.write("use post method to post");
        }
        
        res.end();

    }).listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}




