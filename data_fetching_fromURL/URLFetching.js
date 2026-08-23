let user= fetch("https://dummyjson.com/users")
console.log(user)   //Promise {<pending>}
user.then((res) => {
    console.log(res);   //Response {type: 'cors', url: 'https://dummyjson.com/users', redirected: false, status: 200, ok: true, …}
    console.log(res.status)
    console.log("Body"+res.body)
    console.log("URL: "+res.url)
    console.log("It is Ok "+res.ok)
    console.log("It is type: "+res.type)
    console.log("Redirected: "+res.redirected)
    return res.json();
})
.then((res) => {
    console.log(res)
    console.log(res.limit) 
    console.log(res.skip)
    console.log(res.total)
    console.log(res.users)  

    res.users.forEach((ele) =>console.log(`${ele.firstName} ${ele.lastName} ${ele.maidenName} is from ${ele.address.city} and working at ${ele.company.name}`))    //Gets Data

    let females = res.users.filter((ele) => ele.gender=== 'female')
    console.log(females);

    let admin = res.users.filter((ele) => ele.role === 'admin');
    console.log(admin);

    let adminFemales = res.users.filter((ele) => ele.role === 'admin' && ele.gender === 'female')
    console.log(adminFemales);
})

console.log("********************************************************")
let rec = fetch("https://dummyjson.com/recipes");
rec.then((res) => res.json())
.then((res) => {
    console.log(res);
    console.log(res.recipes)

    res.recipes.forEach((ele) => {
        console.log(ele.name);
        document.write(`<h1>${ele.name}</h1>`)
        document.write(`<img src = "${ele.image}" alt = "${ele.name}">`)
        document.write(`<h5> ${ele.ingredients} </h5>`)
    })

    let calLessThan300 = res.recipes.filter((ele) => ele.caloriesPerServing < 300)
    console.log(calLessThan300);
})
.catch((err) => console.log(err))
.finally(() => console.log("Promise Completed"))

let prod = fetch("https://dummyjson.com/products")
prod.then((res) => res.json())
.then((res) => {
    //console.log(res);
    console.log("Product Limit: "+res.limit)
    console.log("Products Skipped: "+res.skip)
    console.log("product",res.products)

    res.products.forEach((ele) => console.log(`${ele.title} Price: 💵${Math.round(ele.price * 95)}`));

    let inStock = res.products.filter((ele) => ele.availabilityStatus === 'In Stock')
    console.log(inStock);

    let ratingGreaterThan3 = res.products.filter((ele) => ele.rating > 3)
    console.log(ratingGreaterThan3)

    res.products.forEach((ele) => {
        console.log(ele.category)
        document.write(`<h1> ${ele.title} </h1>`)
        document.write(`<img src = "${ele.thumbnail}" alt = "${ele.title}"><br>`); 
        document.write(` <b> 💵 Rs${Math.round(ele.price * 95)} </b>`)
        document.write(`<p> ${ele.description.slice(0,50)}... </p>`) 
    })
    
        let groceries = res.products.filter((ele) => ele.category === 'groceries');
        console.log(groceries);
})
.catch((err) => console.log(err))
.finally(() => console.log("Products Promise Completed"))
