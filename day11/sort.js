export function sort(data,order){
    if(order === 'asc'){
        data.sort((a,b) => a.price - b.price);
    }
    else if(order === 'desc'){
        data.sort((a,b) => b.price - a.price);
    }
   return data;
}

