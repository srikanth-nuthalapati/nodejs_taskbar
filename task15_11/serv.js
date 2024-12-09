
let http = require("http");
let url = require("url");

var server1 = http.createServer(async (req, res) => {
  try{
    const api = await fetch("https://fakestoreapi.com/products/")
    const data = await api.json();
  
    let query = {}
    if (req.url.includes('?')) {
      let queryString = req.url.split('?')[1];
      let params = queryString.split('&');
      for(i of params){
        let [key, value] = i.split('=');
        query[key] = decodeURIComponent(value);
      }
    }
    
    let items = data;

    let cat = query.category || 0;
    if(cat){
    switch (cat) {
      case 'm':
        items = data.filter(item => item.category === "men's clothing");
        break;
      case 'w':
        items = data.filter(item => item.category === "women's clothing");
        break;
      case 'e':
        items = data.filter(item => item.category === "electronics");
        break;
      case 'j':
        items = data.filter(item => item.category === "jewelery");
        break;
      default:
        res.write("m/M - men's clothing \nw/W - women's clothing \ne/E electronics \nj/J - jewelery");
    }
  }

   let order = query.sort || 0;
    if (order) {
      if (order == 'asc' || order == 'ASC') {
        items = items.sort((a, b) => a.price - b.price);
      }
      else if (order == 'desc' || order == 'DESC') {
        items = items.sort((a, b) => b.price - a.price);
      }
      else {
        res.write("sort - asc or desc");
      }
    }

  res.write(JSON.stringify(items));
  res.end();
  }
  catch(error){
    res.end(error.message);
  }
 
})

server1.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});






let server2 = http.createServer(async(req,res)=>{
  try{
    const api = await fetch("https://fakestoreapi.com/products/")
    const data = await api.json();
    let Url = url.parse(req.url, false);
    let path = Url.pathname.split("/")[Url.pathname.split("/").length - 1];
    // let path = req.url.split("/")[1];
    
    let obj = data.filter(val => val.id == path);
    if(obj.length > 0)
    res.write(JSON.stringify(obj));
    else
    res.write("no products to get");

    res.end();
  }
  catch(error){
    res.end("something went wrong");
  }
})

// server2.listen(3001, () => {
//   console.log('Server running at http://localhost:3001/');
// });

