
console.log("************************************************")

console.log("Code Starting");

function apiCalling(){
    console.log("Entered Inside function");

    let recepies = fetch("https://dummyjson.com/recipes");
    console.log(recepies);

    recepies.then((res) => {
        console.log(res,"*******************");
        console.log(res.body)
        return res.json();
    })
    .then((res) => {
        console.log(res,"***********");
        console.log("Fetching Data from API")
        console.log(res.recipes);
        console.log("Data Fetcing from API is completed");
    })
}
apiCalling();
console.log("API function is completed");

//Async: Means an Asynchronous function which handles asynchronous operations and returns Promise
//Await: Await stops the function execution at a particular point until the promise is resolved
console.log("****************************************")
let apiCalling1 = async () => {
    console.log("Entered Inside the function");

    let rec = await fetch("https://dummyjson.com/recipes");
    console.log(rec);

    let data = await rec.json();    //Converting to json
    console.log(data);

    console.log("Recipes -> ",data.recipes)
    console.log("Data Fetching from the API Completed");
} 
apiCalling1();
console.log("apiCalling1 Completed")

async function demo(){
    return "hello";
} 
console.log("From Demo() Function returning the promise",demo())    //Returns Promise
//Promise {<fulfilled>: 'hello'}