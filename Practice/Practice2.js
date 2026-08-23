let arr1 = ["Apple", "Banana"]
arr1.push("Mango");
console.log(arr1);   //[ 'Apple', 'Banana', 'Mango' ]

console.log(arr1.pop()); //Mango
console.log(arr1);   //[ 'Apple', 'Banana' ]

arr1.shift();
console.log(arr1);   //[ 'Banana' ]

arr1.unshift("Apple", "Mango", "Graphes");
console.log(arr1);   //[ 'Apple', 'Mango', 'Graphes', 'Banana' ]

let str1 = " JavaScript "
console.log(str1.trim());  //JavaScript

let str2 = "HELLO WORLD";
console.log(str2.toLocaleLowerCase());  //hello world

let str3 = "I Love JavaScript";
console.log(str3.includes("Love")) //true

let str4 = "photo.png";
console.log(str4.endsWith(".png"));  //true

let str5 = "JavaScript"
console.log(str5.startsWith("Java"));  //true

let arr2 = [10,20,30,40,50,60];
for(let i = 1; i<4; i++){
    console.log(arr2[i]);  //20 30 40
}

console.log(arr2.splice(1,1))   //[ 20 ]
console.log(arr2);  //[ 10, 30, 40, 50, 60 ]

console.log(arr2[arr2.indexOf(40)] = 100);  //100  
console.log(arr2);  //[ 10, 30, 100, 50, 60 ]

let arr3 = ['Red', 'Green', 'Blue', 'Yellow'];
console.log(arr3.splice(1,0, 'Pink'));  //[]
console.log(arr3);  //[ 'Red', 'Pink', 'Green', 'Blue', 'Yellow' ]

let lowercase = arr3.map((ele) => ele.toLocaleUpperCase())
console.log(lowercase); //[ 'RED', 'PINK', 'GREEN', 'BLUE', 'YELLOW' ]

let arr4 = [" Java ", " Script ", " React "]
let trimed = arr4.map((ele) => ele.trim());
console.log(trimed);  //[ 'Java', 'Script', 'React' ] 

let doubled = arr2.map((ele) => ele * 2);
console.log(doubled);  //[ 20, 60, 200, 100, 120 ]

let excl = arr4.map((ele)  => ele.trim() + "!");
console.log(excl);  //[ 'Java!', 'Script!', 'React!' ]

