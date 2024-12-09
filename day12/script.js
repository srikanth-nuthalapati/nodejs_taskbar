import { Cat } from "../day11/filtering.js";
import { sort } from "../day11/sort.js";

let container = document.querySelector(".container");
let category = document.querySelector("header #category");
let Sort = document.querySelector("header #sort");

let catSel = 'All';
let sortSel = 'none'

category.addEventListener("change",()=>{
    catSel = category.value
    calldata();
})

Sort.addEventListener("change",()=>{
   sortSel = Sort.value;
   calldata();
})

async function calldata() {
    const products = await fetch("https://dummyjson.com/products");
    const data = await products.json();

    let finaldata = Cat(data.products,catSel)
    finaldata = sort(finaldata,sortSel)
    
    container.innerHTML = "";
    finaldata.map((val)=>{
        let card = document.createElement("div");
        card.innerHTML = `
            <h2>${val.title}</h2>
            <p>${val.description}</p>
            <img src="${val.images[0]}" alt=${val.title}>
            <p>Category: ${val.category}</p>
            <p class="price">Price: $${val.price}</p>
            <p>Discount: ${val.discountPercentage}%</p>
            <p>rating: ${val.rating}</p>
            <a onclick="red()" href="product.html" target="_blank">See More</a>
        `;
        card.querySelector("a").addEventListener("click", () => {
            localStorage.setItem("product", JSON.stringify(val));
        });
        container.appendChild(card);
    })
}

calldata();  