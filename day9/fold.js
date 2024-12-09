const http = require("http");
const fs = require("fs");

function readfile(){
    http.createServer((req,res)=>{
        fs.readFile("C:/Users/Srikanth/.gitconfig", (err, data) => {
            if (err) res.write(err.message)
            else res.write(data.toString())
            
        res.end();
        })
    }).listen(3000,()=>{
        console.log("Server is running on port 3000");
    })
}

// readfile();

function multiDirWithoutRec(){
    http.createServer((req,res)=>{
        fs.mkdir("a",(err)=>{
            if(err){
                console.log(err);
            }
            else {
                fs.mkdir("a/b",(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("inner created");
                    }
                })
            }
            res.end();
        })

    }).listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}

// multiDirWithoutRec()

function multiDirWithRec(){
    http.createServer((req,res)=>{
       fs.mkdir("a/b",{recursive:true},(err)=>{
        if(err)
            console.log(err);
        else
            fs.mkdir("a/c",{recursive:true},(err)=>{
                if(err) console.log(err);
                else console.log("created");
            }) 
        })
       res.end();
    })
    .listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}

// multiDirWithRec()

function readDir(){
    http.createServer((req,res)=>{
        fs.readdir("",(err,files)=>{
            if(err) res.write(err.message);
            else ;
        })
        res.end();
    }).listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}

// readFiles();

function removeDir(){
    http.createServer((req,res)=>{
            fs.rm("a",{recursive:true},(err)=>{
                if(err) console.log(err);
                else console.log("removed");
            })
        res.end();
    })
    .listen(3000,()=>{
        console.log("server is running on port 3000");
    })
}

// removeDir();
