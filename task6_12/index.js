const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express()
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let store = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,__dirname + "/images");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + file.originalname);
    }
})

let upload = multer({storage:store});
let submittedData = {};

app.post("/form",upload.single("file"),(req,res)=>{
    submittedData = {
        userdata:req.body,
        file:req.file ? req.file.fieldname : null,
    }
    res.redirect("/page2"); 
})

app.get("/page2",(req,res)=>{
    const { userdata, file } = submittedData;

    const htmlContent = `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page 2</title>
    </head>
    <body>
        <h1>User Submitted Data</h1>
        <p><strong>Name:</strong> ${userdata.name || "N/A"}</p>
        <p><strong>Email:</strong> ${userdata.email || "N/A"}</p>
        <p><strong>DOB:</strong> ${userdata.dob || "N/A"}</p>
        <p><strong>Password:</strong> ${userdata.password || "N/A"}</p>
        ${
          file
            ? `<p><strong>Uploaded File:</strong> <a href="/images/${file}" target="_blank">Download</a></p>`
            : "<p>No file uploaded</p>"
        }
    </body>
    </html>
    `;
    res.send(htmlContent);
});

app.use("/images",express.static(path.join(__dirname, "images")));

app.listen(port,()=>{
    console.log("server is running on 3000");
    
})
