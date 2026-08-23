let str1 = "Frontend Developer"
console.log(str1.replace(" ", "-"));    //Frontend-Developer

let str2 = "JavaScript";
console.log(str2.substring(str2.indexOf("Script"), str2.length));           //Script  
console.log(str2.substring(str2.indexOf("Java"), str2.indexOf("Script")));  //Java

let arr1 = ["sam", "alex", "jack"]
let ans1 = arr1.map((ele) => {
    let str = ele.charAt(0).toLocaleUpperCase() + ele.slice(1); 
    return str;
})
console.log(ans1);  //[ 'Sam', 'Alex', 'Jack' ]

let arr2 = ['BANANA', 'APPLE', 'GRAPHES', 'ORANGES']
let ans2 = arr2.map((ele) => {
    let str = ele.charAt(0) + ele.slice(1).toLocaleLowerCase();
    return str;
})
console.log(ans2);  //[ 'Banana', 'Apple', 'Graphes', 'Oranges' ]

let arr3 = [" ht ml ", " css ", " JAVA script ", " re a ct "];
arr3.forEach((ele) => {
    console.log(ele.replaceAll(" ", "").toLocaleUpperCase()); // HTML, CSS, JAVASCRIPT, REACT
})   

let ans4 = arr3.find((ele) => ele.includes('a'));
console.log(ans4.replaceAll(" ", ""));          //javascript

let ans5 = arr3.find((ele) => ele.includes('JAVA'))
console.log(ans5);          // JAVA script

let arr4 = ['APPLE', 'BANANA', 'ORANGE', 'KIWI'];
console.log(arr4.splice(1,2));      //[ 'BANANA', 'ORANGE' ]
console.log(arr4);                  //[ 'APPLE', 'KIWI' ]

let arr5 = ['APPLE', 'BANANA', 'ORANGE', 'KIWI'];
console.log(arr5.splice(1,1, "MANGO")); //[ 'BANANA' ]
console.log(arr5);  //[ 'APPLE', 'MANGO', 'ORANGE', 'KIWI' ]

console.log(arr5.splice(arr5.length-2,2));  //[ 'ORANGE', 'KIWI' ]

let arr6 = ['APPLE', 'BANANA', 'ORANGE', 'KIWI'];
console.log(arr6.slice(0, 4))   //[ 'APPLE', 'BANANA', 'ORANGE', 'KIWI' ]
console.log(arr6.slice(arr6.length-3, arr6.length));    //[ 'BANANA', 'ORANGE', 'KIWI' ]

let str3 = "React, Angular, Vue";
console.log(str3.toLocaleLowerCase().split(" "));   //[ 'react', ' angular', ' vue' ]

let arr7 = ["javascript", "react", "node"];
console.log(arr7.join(" ").toLocaleUpperCase());    //JAVASCRIPT REACT NODE
