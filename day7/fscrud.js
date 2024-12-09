const fs = require("fs");

let file_name = "day7/create.txt";
let data = "hi i just created a file and added this data";
function create(file_name,data){
    fs.writeFile(file_name,data,"utf-8",(err)=>{
        if(err) console.log(err);
        else console.log("file created");
    })
}
// create(file_name,data);

function read(file){
    fs.readFile(file,"utf-8",(err,data)=>{
        if(err) console.log(err);
        else console.log(data);
    });
}
// read(file_name);

function update(file){
    fs.appendFile(file,"\n this is the updated data",(err)=>{
        if(err) console.log(err);
        else console.log("file updated");
    })
}
//  update(file_name);

function del(file){
    fs.unlink(file,(err)=>{
        if(err) console.log(err.message);
        else console.log("file deleted");
    })
}
//  del(file_name);

function h(){
    fs.copyFile(file_name,"created.txt",(err)=>{
        if(err) console.log(err);
        else console.log("file copied");
    })
}
// h()