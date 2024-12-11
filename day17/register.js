const express = require("express");
const bcrypt = require("bcrypt");
const conn = require("./dao");
require("dotenv").config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

// app.post("/register",(req,res)=>{
//     let salt = 10;
//     let encodepass = bcrypt.hashSync(req.body.password,salt);
//     let st = `insert into users(username,password)
//                 values(?, ?);
//     `;

//     conn.query(st,[req.body.username,encodepass],(err,info)=>{
//         if(err){
//             res.send({
//                 status:400,
//                 message:err.message
//             })
//         }
//         else{
//            res.send({
//             status:200,
//             message:"submited"
//            }) 
//         }
//     })
// })

app.post("/login",(req,res)=>{
    let st = `select * from users where username = ?;`
     conn.query(st,[req.body.username],(err,data)=>{
        if(err){
            res.send({
                status:400,
                message:err.message
            });
        }
        else{
            if(data.length > 0){
                let user = data[0];
                if(bcrypt.compareSync(req.body.password,user.password)){
                    res.send({
                        status:200,
                        message:"login success"
                    });
                }
                else{
                    res.send({
                        status:400,
                        message:"invalid username or password"
                    });
                }
            }
            else{
                res.send({
                    status:400,
                    message: "User not found"
                });
            }
        }
   });
});

app.listen(process.env.port,()=>{
    console.log(`server is running on port`);
})