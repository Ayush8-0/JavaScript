let allProducts = "";
let container = document.getElementById("products-container");
let printProducts = (products) => {
    container.innerHTML = products.map((product) =>
        `<div id = "product-card">
            <img src = "${product.thumbnail}" alt = "${product.title}" id = "product-img">
            <h1> ${product.title} </h1>
            <h2> Proce: ${Math.round(product.price*95)} </h2>
            <p> ${product.rating} </p>
            <button id = "add-to-cart"> Add to Cart </button>
        </div>
        `).join("")
};

let fetchProduct = async () => {
    try{
        //let api = await fetch("https://fakestoreapi.com/products");
        let api = await fetch("https://dummyjson.com/products");
        let data = await api.json();

        //console.log(data);
        //console.log(data.products)
        allProducts = data.products;
        printProducts(allProducts);
    }catch(error){
        console.log("Error in fetching data")
    }
}
fetchProduct();

let below500 = () =>{
    let filterProd =  allProducts.filter((product) => Math.round(product.price*95) < 500);
    printProducts(filterProd);
}

let above500 = () =>{
    let filterProd =  allProducts.filter((product) => Math.round(product.price*95) > 500);
    printProducts(filterProd);
}

let lowToHigh = () =>{
    allProducts.sort((a, b) => {
        return Math.round(a.price*95) - Math.round(b.price*95);
    });
    printProducts(allProducts);
}

let highToLow = () =>{
    allProducts.sort((a, b) => {
        return Math.round(b.price*95) - Math.round(a.price*95);
    });
    printProducts(allProducts);
}

let search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
    let filterProd = allProducts.filter((product) => {
        return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    printProducts(filterProd);
    });

