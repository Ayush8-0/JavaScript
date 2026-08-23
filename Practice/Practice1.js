let str = "JavaScript"
let ans1 = str.slice(4);
console.log(ans1.startsWith("S")); //true

let str2 = "Hello World"
console.log(str2.indexOf("W"), str2.slice(str2.indexOf("W"))); //6 World

let str3 = "Programming"
console.log(str3.endsWith("ing"), str3.includes("gram")); //true true

let str4 = "Developer"
let ans2 = str4.slice(-5)
console.log(ans2+ans2+ans2); //loperloperloper

console.log(str.indexOf("a"), str.lastIndexOf("a")); //1 3

let str5 = "Frontend Developer"
console.log(str5.startsWith("Front"), str5.endsWith("per"));  // true true

console.log(str3.slice(0,4), str3.includes("ro"));  //Prog true

let str6 = "Java, Python, C++, JavaScript"
console.log(str6.split(','), str6.indexOf('Script'))    //[ 'Java', ' Python', ' C++', ' JavaScript' ] 23
console.log(str6.substring(23,29)); //Script

console.log(str6.startsWith("A"), str6.endsWith('Z'));  //false false

console.log(str6.charAt(0), str6.charAt(str6.length - 1));  //J t

console.log(str2.lastIndexOf("o"))  //7

let str7= "Full Stack Developer"
let ans3 = str7.slice(str7.indexOf("Stack"), str7.indexOf(" Developer"))
console.log(ans3, ans3.endsWith("ck"));  // Stack true

let a = str.charAt(0);
let ans4= "";
for(let i = 0; i<10; i++){
    ans4+=a;
}
console.log(ans4);  //jjjjjjjjjj

let str8 = 'Java Full Stack Developer'
console.log(str8.indexOf(" "), str8.slice(0, str8.indexOf(" "))); //4 Java

console.log(str8.slice(str8.lastIndexOf("D")));  //Developer

console.log(str3.includes("Pro"), str3.startsWith("P"));    //true true

let str9 = "HTML-CSS-JS"
console.log(str9.split("-"), str9.slice(str9.lastIndexOf("J")));  //[ 'HTML', 'CSS', 'JS' ] JS

let str10 = "Java Developer"
console.log(str10.slice(str10.indexOf("D")), str10.includes("lop"));   //Developer true

console.log(str.indexOf("S"), str.endsWith("t"));  //4 true