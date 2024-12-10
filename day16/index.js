const express = require("express")
const nodemailer = require("nodemailer");
let app = express();


let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'srikanthjames30@gmail.com',
        pass: ' qjfm uvnr nouz dljp'
    }
})

let options = {
    from: 'srikanthjames30@gmail.com',
    to: 'srikanthnuthalpati@outlook.com',
    subject: 'sending mail using nodemailer',
    text: 'this is me'
};

app.post("/gmail",(req,res)=>{
   transporter.sendMail(options,(err,info)=>{
    if(err){
        res.send(err.message) 
    }
    else{
        res.send(info);
    }
   })
})


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
