let arr1 = [' ht ml ', ' c s s '," java script ", 'Re a ct'];
let ans1 = arr1.map((ele) => ele.replaceAll(" ", "").toLocaleUpperCase());
console.log(ans1);  //[ 'HTML', 'CSS', 'JAVASCRIPT', 'REACT' ]

let str1 = "HTML CSS JAVASCRIPT REACTS"
let arr2 = str1.toLocaleLowerCase().split(" ");
console.log(arr2); //[ 'html', 'css', 'js', 'javascript', 'react' ]

let ans2 = str1.slice(str1.indexOf('JAVASCRIPT'), str1.indexOf('JAVASCRIPT')+"JAVASCRIPT".length)   
console.log(ans2);  ////JAVASCRIPT

let ans3 = arr2.find((ele) => ele.length == 6);
console.log(ans3);      //reacts

console.log(arr2.shift(),arr2.pop(), arr2.unshift("html")); //html reacts 3
console.log(arr2);      //[ 'html', 'css', 'javascript' ]

let arr3 = [];
console.log(arr3.push('HTML'), arr3.push('CSS', 'JS'));    //1 3 //inserts 1 element then 3 is the size of array 
console.log(arr3)   //[ 'HTML', 'CSS', 'JS' ]

let arr4 =["apple", 'banana', 'kiwi'];
let ans4 = arr4.map((ele) => ele.toLocaleUpperCase());  //[ 'APPLE', 'BANANA', 'KIWI' ]
console.log(ans4);

let arr5 = ['I', 'Love', 'React'];
console.log(arr5.join(" ").replace("React", "Angular"));    //I Love Angular

let str2 = "hello world";
console.log(str2.toLocaleUpperCase());  //HELLO WORLD