let arr = [10,20,30,40,50]
console.log(arr+" "+typeof arr)  //10,20,30,40,50 object
console.log(arr.length);        //5
console.log(arr[0]+" "+arr[1]+" "+arr[6])   //10 20 undefined
arr[6] = 60;
arr[7] = 70;
console.log(arr[6]+" "+arr[7])      //60 70
console.log("**************************************")

let random = [1,"Ayush", true, null, undefined]
console.log(random+" "+typeof random)  //1,Ayush,true,, object
console.log(random)  //[ 1, 'Ayush', true, null, undefined ]
console.log("***************************************")

let trip = []
console.log(trip);  //[]
trip.push("Bottle");
trip.push("Clothes");
trip.push("food");
trip.push("Money")
trip.push("Papers");
console.log(trip) //[ 'Bottle', 'Clothes', 'food', 'Money', 'Papers' ]

trip.push("headphones", "Mobile", "Charger", "Bag");
console.log(trip)
/*[
  'Bottle', 'Clothes',
  'food',   'Money',
  'Papers', 'headphones',
  'Mobile', 'Charger',
  'Bag'
]
*/
console.log(trip.length)

console.log(trip.pop());   //Bag
console.log(trip);
/*
[
  'Bottle',
  'Clothes',
  'food',
  'Money',
  'Papers',
  'headphones',
  'Mobile',
  'Charger'
]
*/

console.log(trip.pop());   //Charger
console.log(trip);
/*
[
  'Bottle',
  'Clothes',
  'food',
  'Money',
  'Papers',
  'headphones',
  'Mobile'
]
*/

trip.unshift("Kunal", "Ayush");   //Adds at start
console.log(trip);
/*
[
  'Kunal',  'Ayush',
  'Bottle', 'Clothes',
  'food',   'Money',
  'Papers', 'headphones',
  'Mobile'
]
*/
trip.shift();         //Remove from Start
console.log(trip);
/*
[
  'Ayush',
  'Bottle',
  'Clothes',
  'food',
  'Money',
  'Papers',
  'headphones',
  'Mobile'
]
*/

trip.splice(1,2) //(IndexPosition,DeleteCount)
console.log(trip);  
/*
[ 'Ayush', 'food', 'Money', 'Papers', 'headphones', 'Mobile' ]
[Bottel, Clothes] -> Removed
*/

trip.splice(1,2, "Shoes", "Raincoat")
console.log(trip);  //[ 'Ayush', 'Shoes', 'Raincoat', 'Papers', 'headphones', 'Mobile' ]

trip.splice(1,0,"Tent", "Plastic bags", "Rope");
console.log(trip);

/*
[
  'Ayush',
  'Tent',
  'Plastic bags',
  'Rope',
  'Shoes',
  'Raincoat',
  'Papers',
  'headphones',
  'Mobile'
]
*/

let animals = ["cat", "Lion", "Tiger", "Elephant", "Horse"]
console.log(animals);  //[ 'cat', 'Lion', 'Tiger', 'Elephant', 'Horse' ]

let newAnimals = animals.slice(1,3)
console.log(newAnimals);  //[ 'Lion', 'Tiger' ]
console.log(animals);   //[ 'cat', 'Lion', 'Tiger', 'Elephant', 'Horse' ] original array remains the same no change in original array
console.log(animals.slice(1));  //[ 'Lion', 'Tiger', 'Elephant', 'Horse' ] removed 1 element and printed reamining array

console.log(animals);  //[ 'cat', 'Lion', 'Tiger', 'Elephant', 'Horse' ]

console.log("*************************************************")
//Accessing Elements using for loop
let numbersArray = [10,15,9,5,20]
for(let i = 0; i<numbersArray.length; i++){
  console.log(numbersArray[i], i);
}

let sum = 0;
for(let i = 0; i<numbersArray.length; i++){
  sum+=numbersArray[i];
}
console.log(sum);

let evenArr = [];
let oddArr = [];
console.log(oddArr); // []
for(let i = 0; i<numbersArray.length; i++){
  if(numbersArray[i] % 2 == 0) {
    //evenArr[i] = numbersArray[i]; //[ 10, <3 empty items>, 20, 24, 12, 4, 6 ] 3 empty items bcoz after 3 numbers are odd hence push method is suitable in this case
    evenArr.push(numbersArray[i])
  }
  else {
    oddArr.push(numbersArray[i])
  }
}

console.log(evenArr);   //[ 10, 20 ]
console.log(oddArr);    //[ 15, 9, 5 ]

//Array consist of multiple elements of different datatype sort the element according to their datatypes
let rand = ['js', true, 10,'html',20.4, false, 30];
let strArr = [];
let numArr = [];
let boolArr = []
for(let i = 0; i<rand.length; i++){
  if(typeof rand[i] === "string") strArr.push(rand[i]);         //[ 'js', 'html' ]
  else if(typeof rand[i] === "number") numArr.push(rand[i]);    //[ 10, 20.4, 30 ]
  else if (typeof rand[i] === "boolean") boolArr.push(rand[i]); //[ true, false ]
}
console.log(strArr);
console.log(numArr);
console.log(boolArr);

let products = ["TV", "AC", "FRIDGE", "MOBILE", "LAPTOP", "PS5"]
for(let i = 0; i<products.length; i++)
  console.log(products[i].toLowerCase());
// tv
// ac
// fridge
// mobile
// laptop
// ps5

//1st lettter should be capital
let productAns = [];
for(let i = 0; i<products.length; i++){
  let curr = products[i];
  let temp = curr[0];
  for(let j = 1; j<curr.length; j++){
    temp += curr[j].toLowerCase();
  }
  productAns.push(temp);
}
console.log(productAns);    //[ 'Tv', 'Ac', 'Fridge', 'Mobile', 'Laptop', 'Ps5' ]

//Another Way: 1st lettter should be capital
let productAns1 = [];
for(let i = 0; i<products.length; i++){
  productAns1.push(products[i][0]+products[i].slice(1).toLowerCase());
}
console.log(productAns1);

//Print Element which have length greater than 3
let greaterThan3 = []
for(let i = 0; i<products.length; i++){
  if(products[i].length > 3) greaterThan3.push(products[i]);
}
console.log(greaterThan3);

//Even Index Products
let evenIdx = []
for(let i = 0; i<products.length; i++){
  if(i%2 == 0) evenIdx.push(products[i]);
}
console.log(evenIdx);

//Print only 1st 3 character of the array of string
let first3 = []
for(let i = 0; i<products.length; i++){
  if(products[i].length <3) continue;
  else first3.push(products[i].slice(0,3))
}
console.log(first3);

let evenLength = [];
for(let i = 0; i<products.length; i++){
  if(products[i].length % 2 == 0) evenLength.push(products[i]);
}
console.log(evenLength);

let picnic = ["charger", "Clothes", "bottle", "Bottle"]
let startsWithC = [];
for(let i = 0; i<picnic.length; i++){
  if(picnic[i].charAt(0) == 'C' || picnic[i].charAt(0) == 'c') startsWithC.push(picnic[i]);
}
console.log(startsWithC);

let randNum = [10,20,30,40];
for(let i = 0; i<randNum.length; i++){
  display(randNum[i], i)
}

function display(num,idx){
  console.log(num,idx);
}
console.log("*********************************")
randNum.forEach(display);
// 10 0
// 20 1
// 30 2
// 40 3
console.log("********************************")

randNum.forEach((ele,i) =>{
  console.log(ele, i);  
})
// 10 0
// 20 1
// 30 2
// 40 3
console.log("*********************************");
random.forEach((ele, i,arr) =>{
  console.log(ele, i);
  console.log(arr);
})
/*
1 0
[ 1, 'Ayush', true, null, undefined ]
Ayush 1
[ 1, 'Ayush', true, null, undefined ]
true 2
[ 1, 'Ayush', true, null, undefined ]
null 3
[ 1, 'Ayush', true, null, undefined ]
undefined 4
[ 1, 'Ayush', true, null, undefined ]
*/ 

let forEach = randNum.forEach((items) =>{  
  return items
})
console.log(forEach);  //undefined

//Double the number
let double = [] 
randNum.forEach((ele) => {  //For each is help us to use iterate through the array internal implementation is : for(let i = 0; i<randNum.length; i++)
  double.push(ele+ele);
})
console.log(double);  //[ 20, 40, 60, 80 ]

console.log("******************** MAP *****************")

//Only display 1st letter in uppercase and remaining letters in lowercase
let productMap = products.map((ele) => {
    return ele[0] + ele.slice(1).toLowerCase();  //map helps us to create a new array for storing purpose
});
console.log(productMap)  //[ 'Tv', 'Ac', 'Fridge', 'Mobile', 'Laptop', 'Ps5' ]

//Only display 1st 3 letters
let productMap2 = products.map((ele) => {
  return ele.slice(0,3);
})
console.log(productMap2);  //[ 'TV', 'AC', 'FRI', 'MOB', 'LAP', 'PS5' ]
let numArr1 = [100,20,30,50,200];
let ansNumArr = numArr1.map((ele) => {
  if(ele>50) return ele;
}) 
console.log(ansNumArr);  //[ 100, undefined, undefined, undefined, 200 ]

console.log("************** FILTER METHOD *************");

let filterArray = numArr1.filter((ele) => ele > 50)  //Filters element without leaving unwanted spaces or undefined keyword
console.log(filterArray);  //[ 100, 200 ]  

console.log("*********** FIND MEHTOD *************")
//Only Getting 1st element
let numsArr = [];
for(let i = 0; i<numArr1.length; i++){
  if(numArr1[i] > 50) {
      numsArr.push(numArr1[i]); 
      break;
    }
}
console.log(numsArr);  //[ 100 ]

let nums1Arr = numArr1.find((ele) => ele > 50)
console.log(nums1Arr);  //100

let product1Ans = products.filter((ele) => ele.length > 3)
  console.log(product1Ans); // [ 'FRIDGE', 'MOBILE', 'LAPTOP' ]

let product2Ans = products.find((ele) => ele.length > 3);
console.log(product2Ans);  //FRIDGE

let product3Ans = products.find((ele) => ele.startsWith("M"))
console.log(product3Ans);  //MOBILE

let num2Ans = numArr1.find((ele) => ele > 20 && ele<50)
console.log(num2Ans);  //30

console.log(numArr1.includes(30)); //true

console.log(numArr1.reverse());  //[ 200, 50, 30, 20, 100 ]

let str = "JAVA SCRIPT"
let str1Arr = str.split("");
console.log(str1Arr);
// [
//   'J', 'A', 'V', 'A',
//   'S', 'C', 'R', 'I',
//   'P', 'T'
// ]

console.log(str.split("A"));  //[ 'J', 'V', 'SCRIPT' ]
console.log(str.split(" "));  //[ 'JAVA', 'SCRIPT' ]
//split("from where to split") split() splits the element from the character mention if not mention(empty string) then it  

let str2Arr = str1Arr.reverse();
console.log(str2Arr);
// [
//   'T', 'P', 'I', 'R',
//   'C', 'S', ' ', 'A',
//   'V', 'A', 'J'
// ] reversed array

console.log(str2Arr.join(""));  //TPIRCS AVAJ

let str1 = "Hello Java Script"
let str3Arr = str1.split("").reverse().join("");  //tpircS avaJ olleH
console.log(str3Arr)

let str4Arr = str1.split(" ").reverse().join(" "); //Script Java Hello
console.log(str4Arr);

let str5Arr = str1.split("").reverse().join("").split(" ").reverse().join(" ");
console.log(str5Arr);

numArr1.sort((a,b) => a-b)
console.log(numArr1);  //[ 20, 30, 50, 100, 200 ]

numArr1.sort((a,b) => b-a)
console.log(numArr1); //[ 200, 100, 50, 30, 20 ]

products.sort((a,b) => b.length - a.length)
console.log(products);  //[ 'FRIDGE', 'MOBILE', 'LAPTOP', 'PS5', 'TV', 'AC' ]

products.sort((a,b) => a.length - b.length)
console.log(products);  //[ 'TV', 'AC', 'PS5', 'FRIDGE', 'MOBILE', 'LAPTOP' ]

let reduceSum1 = numArr1.reduce((acc,curr) => {  //acc: accumulator: Stores the current result, curr: current value, where 100 means initial value of accumulator so it statrts from 100 + other elements
  acc += curr;
  return acc;
}, 100);
console.log(reduceSum1); //100+ 100+20+30+50+200 = 500

let reduceProd = products.reduce((acc, curr) => acc += curr)
console.log(reduceProd, typeof reduceProd);  //TVACPS5FRIDGEMOBILELAPTOP string : it combines all the string array elements and store it in string

let frnds = ["Ayush", "Kunal", "Nitin", "Keshav", "Aniket"]
console.log(frnds.indexOf("Kunal")); //11\

let lessThan500 = numArr1.every((ele) => {
////Check all the elements less then 500
  return ele < 500;
})
console.log(lessThan500);  //true

let moreThan1 = numArr1.every((ele) => ele > 1);
console.log(moreThan1);  //true

let nestedArr = [10,[20,30,[40,[50,60]]]]
console.log(nestedArr[0])     //10
console.log(nestedArr[1][0]) //20

console.log(nestedArr[1][1])  //30

console.log(nestedArr[1][2]);  //[ 40, [ 50, 60 ] ]
console.log(nestedArr[1][2][0]) //40
console.log(nestedArr[1][2][1]) //[ 50, 60 ]
console.log(nestedArr[1][2][1][0])  //50
console.log(nestedArr[1][2][1][1])  //60

console.log(nestedArr.length)     //2
console.log(nestedArr[1].length)  //3
console.log(nestedArr[1][2].length) //2
console.log(nestedArr[1][2][1].length) //2

console.log(nestedArr.flat(0))  //[ 10, [ 20, 30, [ 40, [Array] ] ] ]
console.log(nestedArr.flat(1))  //[ 10, 20, 30, [ 40, [ 50, 60 ] ] ]
console.log(nestedArr.flat(2))  //[ 10, 20, 30, 40, [ 50, 60 ] ]
console.log(nestedArr.flat(3))  //[ 10, 20, 30, 40, 50, 60 ]

console.log("**************** DEPLICATED ARRAY ******************")
let duplicatedArr = [10, 20, 20, 40, 50, 60, 10, 80, 90, 90]
// duplicatedArr.sort((ele1,ele2) => ele2-ele1)
// console.log(duplicatedArr);

// let idx = 1;
// for(let i = 1; i<duplicatedArr.length; i++){
//   if(duplicatedArr[i] != duplicatedArr[i-1]){
//     duplicatedArr[idx] = duplicatedArr[i];
//     idx++
//   }
// }
//console.log(duplicatedArr.slice(0, idx));

let uniqueArr = duplicatedArr.filter((ele,i,arr) => arr.indexOf(ele) === i)
console.log(uniqueArr);
// [
//   90, 80, 60, 50,
//   40, 20, 10
// ]

for(let i = 0; i<duplicatedArr.length; i++){
  console.log(duplicatedArr.indexOf(duplicatedArr[i]))
}
//indexOf() check the 1st element occurrence means when the 10 was 1st occured
