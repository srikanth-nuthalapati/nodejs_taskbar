const multer = require("multer");
const express = require("express");
const cors = require("cors")
const path =require("path");
const { log } = require("console");
const app = express();
app.use(cors())

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const store = multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,__dirname + "/uploads");
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now() + file.originalname);
        }
});

let upload = multer({
    storage:store,
    fileFilter:(req,file,cb)=>{
        let pattern = /\.(jpg|jpeg|png)$/i;
        if(pattern.test(file.originalname)){
            cb(null,true);
        }
        else{
            cb(new Error("only image is accepted and size should above 50 kb"),false);
        }

    }
});

app.post("/post",(req,res)=>{
    upload.single("file")(req,res, (err)=>{
        try{
            if(err){
                return res.status(500).send({
                    message:err.message
                })
            }

            if(!req.file){
                return res.status(500).send({
                     message:"No file uploaded"
                })
             }
                res.status(200).send({
                    message: "File uploaded successfully",
                    file: req.file
                });
        }
        catch(err){
            res.status(500).send({
                message:err.message
            })
        }
    })
}).listen(3000,()=>{
    console.log("Server is running on port 3000");
})

