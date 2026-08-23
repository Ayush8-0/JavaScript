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



