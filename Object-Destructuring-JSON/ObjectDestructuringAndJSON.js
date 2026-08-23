let user = {
  name: "John",
  age: 30,
  city: "New York",
  hobbies: ['reading', 'Playing Games', 'Coding']
}
console.log(user);

let jsonObj = JSON.stringify(user);
console.log(jsonObj); 
//{"name":"John","age":30,"city":"New York","hobbies":["reading","Playing Games","Coding"]}

console.log(user.name)      //John
console.log(jsonObj.name)   //undefined
console.log(typeof jsonObj) //string

//In stringify object wer can store the undefined values and also functions as well
let user1 = {
  name: 'John',
  age: 30,
  city: 'New York',
  hobbies: ['Reading', 'Playing Games', 'Coding'],
  job: undefined,

  printUser: function(){
    console.log(this);
  }
}
console.log(user1);
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'Reading', 'Playing Games', 'Coding' ],
//   job: undefined,
//   printUser: [Function: printUser]
// }

user1.printUser();
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'Reading', 'Playing Games', 'Coding' ],
//   job: undefined,
//   printUser: [Function: printUser]
// }

console.log("**************************")
let jsonObj1 = JSON.stringify(user1);
console.log(jsonObj1)
// {"name":"John","age":30,"city":"New York","hobbies":["Reading","Playing Games","Coding"]}

//convert JSON Back to Object
console.log(JSON.parse(jsonObj1));
// {
//   name: 'John',
//   age: 30,
//   city: 'New York',
//   hobbies: [ 'Reading', 'Playing Games', 'Coding' ]
// } 
//Function not present

//Shallow Copy: Performed by assign() in objects method
//Shallow Copy: 
let car = {
  name: 'BMW',
  price: 10000000,
  color: ['Red', 'White', "Blue"],
}

let car1 = Object.assign({}, car);
car.color.push('black');
console.log(car1);
// {
//   name: 'BMW',
//   price: 10000000,
//   color: [ 'Red', 'White', 'Blue', 'black' ]
// }
console.log(car)  
// {
//   name: 'BMW',
//   price: 10000000,
//   color: [ 'Red', 'White', 'Blue', 'black' ]
// }

/* Shallow Copy: When we add in our original 
object (in our case it is car) and the copyed 
object changes(in our case it is car1) is know 
as shallow copy */

//DEEP COPY BY USING JSON
let carJSON = JSON.stringify(car);
console.log(carJSON);
//{"name":"BMW","price":10000000,"color":["Red","White","Blue","black"]}

car.color.push('Green');
console.log(carJSON);
// {"name":"BMW","price":10000000,"color":["Red","White","Blue","black"]}

/*Deep Copy: When we make changes in the original
 object(in our case car is an origin an original 
 object) and the copyed object dosen't changes(in our case it is carJSON 
 is know as deep copy) */

/* ************** ARRAY DESTRUCTURING ************ */
let arr = [10,20,20,40,50]
let [a,b,c,d,e] = arr
console.log(a);   //10
console.log(b);   //20
console.log(c);   //30
console.log(d);   //40
console.log(e);   //50

let[, , , , f] = arr
console.log(e);   //50

/* ************** OBJECT DESTRUCTURING ************ */
let car2 = {
  carName: "BMW",
  price: 1000000,
  color: "red",
  model: 'X3',
  year: 2020 
}

let {carName, price, color} = car2
console.log(carName); //BMW
console.log(price);   //1000000
console.log(color);   //red

let {model} = car2
console.log(model)  //X3

/********** REST & SPREAD OPERATER ********* */
//REST Operator (...others)
let arr1 = [1,2,3,4,5];
let [x,y, ...z] = arr1
console.log(x,y);       //1 2
console.log(z);         //[ 3, 4, 5 ]

let { year, ...others } = car2
console.log(year)       //2020
console.log(others)     //{ carName: 'BMW', price: 1000000, color: 'red', model: 'X3' }

let mobile = {
  mobileName: "iPhone",
  mobilePrice: 100000,
  mobilecolor: 'Blue',
  mobileModel: '17 PRO MAX',
  year: 2026,
  ram: 32,
  Storage: "1TB",
  processor: "Apple A14"
}

let {mobileName, mobilePrice, ...more} = mobile; //{keyName}
console.log(mobileName, mobilePrice);         //iPhone 100000
console.log(more)
// {
//   mobilecolor: 'Blue',
//   mobileModel: '17 PRO MAX',
//   year: 2026,
//   ram: 32,
//   Storage: '1TB',
//   processor: 'Apple A14'
// }

//SPREAD Operator (...arr2)
let arr2 = [1,2,3,4,5,6];
console.log(arr2)         //[ 1, 2, 3, 4, 5, 6 ]
console.log(...arr2)      //1 2 3 4 5 6  (Spread Operator: Extracting all the elements at the same time)

let arr3 = [...arr2];
console.log(...arr2);      //[ 1, 2, 3, 4, 5, 6 ]

//Shallow Copy
let arr4 = [1,2,3,4,{username: 'Ayush'},5,6];
let arr5 = [...arr4]
console.log(arr5 === arr4);     //false
console.log(arr4[4].username === arr4[4].username)  //true
/*
Shallow Copy examples: The array is not same but the data copyed is same
*/

let laptop1 = {
  laptopName1: 'MacBook M5',
  laptopPrice1: 200000
}

let laptop2 = {
  laptopName1: 'MacBook M5 Pro',
  laptopColor2: ['white', 'black']
}

let laptop3 = {...laptop1, ...laptop2};
console.log(laptop3)
// {
//   laptopName1: 'MacBook M5 Pro',
//   laptopPrice1: 200000,
//   laptopColor2: [ 'white', 'black' ]
// }

//Shallow Copy Of the Object
let laptop4 = {...laptop1, ...laptop2};
laptop2.laptopColor2.push("red");
laptop4.laptopColor2.push("Blue");
console.log(laptop4)
// {
//   laptopName1: 'MacBook M5 Pro',
//   laptopPrice1: 200000,
//   laptopColor2: [ 'white', 'black', 'red', 'Blue' ]
// }