//************** LOCAL STORAGE ******************

let x = 100;
localStorage.setItem("data", x); //Create Data  data 100
console.log(localStorage.getItem("data"));  //Read Data 100 

let str = "Tiger";
localStorage.setItem("Animal", str);    //Animal Tiger
console.log(localStorage.getItem("Animal"));    //Tiger

let newStr = "Lion";
let newX = 200;
localStorage.setItem("data",newX);  //Update Data   //data 200
localStorage.setItem("Animal", newStr); //Update Data   //Animal Lion
console.log(localStorage.getItem('data'), localStorage.getItem('Animal'))   //200 Lion

localStorage.removeItem('Animal');  //Removes element data like animal
localStorage.clear()        //Clear the entirew localStorage

let user = {
    userName: "John",
    place: "New York",
    mobile: 1234567890 
};

localStorage.setItem("user", user); //user [object Object]
localStorage.setItem("user1", JSON.stringify(user))   
//user1  {"userName":"John","place":"New York","mobile":1234567890}	
//let userAns = 
console.log(JSON.parse(localStorage.getItem("user1")))
// {userName: 'John', place: 'New York', mobile: 1234567890}
// mobile
// : 
// 1234567890
// place
// : 
// "New York"
// userName
// : 
// "John"
// [[Prototype]]
// : 
// Object

//Boolean Values
localStorage.setItem("isLoggedIn", true);
localStorage.setItem("users", ['John', 'James', 'Jack']);

console.log(localStorage.getItem("users"))







