const http = require("http");
const url = require("url")

const server = http.createServer(async(req,res)=>{
    if(req.method=='GET'){
        const api = await fetch('https://fakestoreapi.com/products/');
        let data = await api.json();

        let path = url.parse(req.url,true).pathname.split("/") //getting pathname and spliting by /
        let id = path.pop();  //getting last index

        let item = data.filter(val => val.id==id); //checking if the id is present in data
        item.length>0?res.write(JSON.stringify(item)):res.write("item not found. 20 items available.");
        res.end(); 
    }
    else{
        res.write("wrong method. use get");
        res.end();
    }
})

const port = 3000;
server.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})