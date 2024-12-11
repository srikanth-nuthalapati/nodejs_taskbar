const express = require("express");
const conn = require("./dao");
const cors = require("cors");

const app = express();
app.use(cors())


app.get("/emp",(req,res)=>{
    let page = parseInt(req.query.page, 10) || 1;
    let limit = parseInt(req.query.limit, 10) || 4;
    let offset = (page - 1) * limit;
    conn.query("select count(*) as count from emp",(err,countResult)=>{
        if(err){
          return res.send({
            status:400,
            message:err.message
           })
        }
        let totalRecords = countResult[0].count;
        let totalPages = Math.ceil(totalRecords / limit);

        conn.query("select * from emp limit ?, ?", [offset,limit], (err,data) => {
            if(err){
                return res.send({
                    status:400,
                    message:err.message
                });
            }

            res.send({
                status:200,
                message:{
                    data:data,
                    totalrecords:totalRecords,
                    totalpages:totalPages,
                    currentPage:page
                }
            });

        });
    });
});

app.listen(process.env.port,()=>{
    console.log("server connected");
});