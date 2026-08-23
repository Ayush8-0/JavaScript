let arr1 = [5,8,10,15,20,25];
arr1.forEach((ele) => {
    if(ele % 2 == 0){
        console.log(ele);  //8 10 20
    }
});
console.log("**************************************");
arr1.forEach((ele)=> {
    if(ele % 2 != 0 ){
        console.log(ele);
    }
})

let arr2 = [10,20,30,40,50,60,70,80, 90,100,110,120,130,140,150];
let ans1 = arr2.filter((ele) => ele > 50);
console.log(ans1);  //[ 60, 70, 80 ]

let arr3 = ['Blue', 'Red', 'Green', 'Yellow', 'Jade',];
let ans2 = arr3.filter((ele) => ele.length > 5);
console.log(ans2)   //[ 'Yellow' ]

let ans3 = arr3.filter((ele) => ele.includes('e'));
console.log(ans3);  //[ 'Blue', 'Red', 'Green', 'Yellow' ]

let ans4 = arr3.filter((ele) => ele.startsWith("J"));
console.log(ans4);  //[ 'Jade' ]

let ans5 = arr3.filter((ele) => ele.endsWith('e'));
console.log(ans5);  //[ 'Blue', 'Jade' ]

console.log("****************************************************")

let ans6 = arr3.find((ele) => ele.includes('e'));
console.log(ans6);  //[ 'Blue' ]

let ans7 = arr3.find((ele) => ele.startsWith("J"));
console.log(ans7);  //[ 'Jade' ]

let ans8 = arr3.find((ele) => ele.endsWith('e'));
console.log(ans8);  //[ 'Blue']

let ans9 = arr2.find((ele) => ele > 100);
console.log(ans9);  //110

let ans10 = arr3.find((ele) => ele.startsWith("R"));
console.log(ans10);  //Red

let ans11 = arr3.find((ele) => ele.endsWith('de'));
console.log(ans11);  //[ 'Jade' ]

let str1 = "HTML CSS JavaScript React";

let ans12 = str1.split(" ");
console.log(ans12);  //[ 'HTML', 'CSS', 'JavaScript', 'React' ]
let ans13 = str1.split(",");
console.log(ans13);  //[ 'HTML CSS JavaScript', ' React' ]

let arr4 = ans12.join(" ");
console.log(arr4);   //HTML CSS JavaScript React

let str2 = "Apple, Banana, Mango, Grapes";
let ans14 = str2.split(", ");
console.log(ans14);  //[ 'Apple', 'Banana', 'Mango', 'Grapes' ]

let arr5 = ["React", "Node", "MongoDB"];
console.log(arr5.join("| "));  //React | Node | MongoDB

let arr6 = ["HTML", 'CS', 'JavaScript'];
console.log(arr6.join("-"));    //HTML-CS-JavaScript

let str3 = "Javascript is awesome"
console.log(str3.replace("awesome", "powerful")) //Javascript is powerful