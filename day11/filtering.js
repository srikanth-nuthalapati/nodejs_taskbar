function Filter(data,cat){
    switch(cat){
        case 'm':
            data = data.filter((product) => product.category == "men's clothing");
            break;
        case 'w':
            data = data.filter((product) => product.category == "women's clothing");
            break;
        case 'e':
            data = data.filter((product) => product.category == "electronics");
            break;
        case 'j':
            data = data.filter((product) => product.category == "jewelery");
            break;
        default:
            data = data;
    }
   return data;
}


export function Cat(data,cat){
    if(!cat || cat ==="All")  return data;

    return data.filter((val) => val.category == cat); 
}

// module.exports = { Filter }






