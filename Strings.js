//String Operation
let str = "Ayush";
console.log(str);
console.log(typeof str);
console.log(str.length);
console.log("-----------------------------------------")
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1 = new String("Kumthekar")   //JS Engine creates string in this way so even if we create a string normally like let str = "Ayush" it will be converted to new String("Ayush") by JS Engine
console.log(str[0]+str1[0]);  //Modern syntax (ES5+)
console.log(str.charAt(0));
console.log(str1[10]); 
console.log("********",typeof str1[10])
console.log(str.charAt(20));  
console.log(typeof str.charAt[10]) 
console.log(str[4]);
console.log(str[-2])  //undefined
console.log("------------------------------------------------------")
console.log(str.charAt(4));
console.log(str.charAt(-2))  //Null
console.log("----------------------------------------------------------")
let str2 = "Hello WebTech and JavaScript"

console.log(str2.length)//28
console.log(str2.slice(6)) //WebTech and JavaScript
console.log(str2.substring(6)) //WebTech and JavaScript

//Both method doesnt affect the original string

console.log(str2.slice(6,27)) //WebTech and JavaScrip
console.log(str2.slice(6,20)) //WebTech and Ja
console.log(str2.substring(6,20))  //WebTech and Ja

console.log(str2.slice(-22,-7));  //WebTech and Jav
console.log(str2.substring(-22,-7)) //NULL

console.log(str2.slice(-22,22)); //WebTech and Java
console.log(str2.substring(-22,22)) //Hello WebTech and Java   (so subString bydefaultly start from 0 if -idx is given) 
console.log(str2.slice(7,-2))  //ebTech and JavaScri
console.log(str2.substring(7,-22))  //Hello W  (so here substring(7,-22)  so it converts to substring(0,7))

console.log(str2.slice(7, -22));  //NULL  (Starting idx is greater than ending idx hence null occurs)

const obj = {
    0: ["M", 1000],
    1: ["CM", 900],
    2: ["D", 500],
    3: ["CD", 400],
    4: ["C", 100],
    5: ["XC", 90],
    6: ["L", 50],
    7: ["XL", 40],
    8: ["X", 10],
    9: ["IX", 9],
    10: ["V", 5],
    11: ["IV", 4],
    12: ["I", 1],
};

const val = Object.values(obj);
//console.log(val);

let ip = 59;
let ans ="";

for(let i = 0; i<val.length; i++){
let symbol = val[i][0];
let value = val[i][1];

while(ip >= value){
    ans+=symbol
    ip -= value
}
}
console.log(ans);

//Question: Take last 4 character of the string reverse it and then add it to the remaining string
let str3 = "Ayush Kumthekar";
let sub = str3.slice(-4)
let rem = str3.slice(0,-4);
let rev = "";
for(let i = sub.length-1; i>=0; i--){
    rev += sub[i]
}
console.log(rem+""+rev);

//Index and LastIndexOf
let str4 = "It is what it is!";
console.log(str4.indexOf("Is"))//-1
console.log(str4.indexOf("is"))//3
console.log(str4.lastIndexOf("is")); //14
console.log(str4.indexOf("is", 4)); //14
console.log(str4.lastIndexOf("is", 4)); //3
console.log(str4.indexOf()); //-1

//StartsWith and EndsWith ReturnType is Boolean
console.log(str4.startsWith("It")); //true
console.log(str4.startsWith("it")); //false
console.log(str4.startsWith("is")); //false
console.log(str4.startsWith("!", str4.length-1)); //true
console.log(str4.startsWith("!", str4.length));   //false
console.log(str4.endsWith("!")) //true
console.log(str4.endsWith("I",1));  //true

//Replace and ReplaceAll
console.log(str4.replace("It", "And"));  //And is what it is!
console.log(str4.replaceAll("is", "Ayush")) //It Ayush what it Ayush!

//Split
console.log(str4.split())  //[ 'It is what it is!' ]
console.log(str4.split(" "));  //[ 'It', 'is', 'what', 'it', 'is!' ]
console.log(str4.split(""));  
/*
[
  'I', 't', ' ', 'i', 's',
  ' ', 'w', 'h', 'a', 't',
  ' ', 'i', 't', ' ', 'i',
  's', '!'
]
*/

console.log(str4.split("i"))  //[ 'It ', 's what ', 't ', 's!' ]
console.log(str4.split("is",1)) //[ 'It ' ]
console.log(+str4.split("is"))  //[ 'It ', ' what it ', '!' ]

//includes
console.log(str4.includes("it")); //(Does it includes or not) true

//trim
let str5 = "                  HI"
console.log(str5.length,str5.trim()); //20 HI

let str6 = "H             I"
console.log(str6.replaceAll(" ", ""))  //HI

//Repeat
console.log(str4.repeat(1));  //It is what it is!
console.log(str4.repeat(2));  //It is what it is!It is what it is!
console.log(str4.repeat(0));  // 
console.log(str4.repeat(3.5)); //It is what it is!It is what it is!It is what it is!
//console.log(str4.repeat(-1));  RangeError: Invalid count value: -1

let str7 = "JS";
let pad1 = str7.
padStart(5)
console.log(pad1.length, pad1);  //5    JS
pad1 = str7.padStart(5,"a");
console.log(pad1);              //aaaJS
pad1 = str7.padStart(5,"ab");
console.log(pad1)               //abaJS
pad1 = str7.padEnd(5,"ab");
console.log(pad1);

console.log(sub)

