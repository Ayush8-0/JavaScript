//Decleration
var a
console.log(a, typeof a); //Undefined 

//Initialization
a=10
console.log(a,"", typeof a); //10

//Decleration + Initialization
var b = `Ayush`
console.log(b, typeof b); //Ayush

//Updation
a = true
console.log(a, typeof a); //true

//Re-declaration and Re-initialization
var a = 3.14
console.log(a, typeof a); //3.14

/*************************************************************** LET ******************************************** */
console.log("**********LET**********")
//Decleration
let c
console.log(c, typeof c); //undefined

//Initialization
c = "Hello"
console.log(c, typeof c); //Hello

//Decleration + Initialization
let d = 12n
console.log(d, typeof d); //12n

//Updation
c = 3.14
console.log(c, typeof c); //3.14

//Re-declaration and Re-initialization
// let c = 20
// console.log(c, typeof c); //Error: Identifier 'c' has already been declared

/*************************************************************** CONST ******************************************** */
console.log("**********CONST**********")
//Declaration    X
//const e;
//console.log(e, typeof e); //Error: Missing initializer in const declaration
//Initialization X
//e= 20;
//console.log(e, typeof e); //Error: Missing initializer in const declaration

//Declaration + Initialization
const f = 20;
console.log(f, typeof f); //20

console.log("wE ONLY USE LET AND CONST KEYWORD FOR DEFINATION");

//Updation X
//f = 30;
//console.log(f, typeof f); //Error: Assignment to constant variable.

//Re-declaration and Re-initialization X
//const f = 30;
//console.log(f, typeof f); //Error: Identifier 'f' has already been declared

/*********************************************** OPERATORS ****************************************************************/
console.log("------------------------------------------Arithmatic Operators----------------------------------------")
let g = 10
let h = 20
let i = g+h
console.log(i);

console.log(`------------------------------------------Logical Operators----------------------------------------`)
let j = 1000;
let k = "1000";
let l = 1000;
console.log(j === k);
console.log(j == k); // == checks only value

console.log(j === l); // === checks datatype and value as well
console.log(j == l );  //

let m = "The sum of " + g + " and " + h + " is: "+i   //String concatination
console.log(m); 


let n = `The sum of ${g} and ${h}  is: ${g+h}`   //String interpolation
console.log(n); 

function demo(start, end){
    for(let i = start; i<end; i++ )
        console.log("Dash Ka Baccha");
}

function demo1(start){
    if(start == 10) return

    console.log(`Hi form recursion ${start}`)
    demo1(start+1);
}

function even(num){
    if(num % 2 === 0 && num != 0)
        console.log(`Even ${num}`)
    else if(num == 0)
        console.log(`It is ${num}`)
    else
        console.log(`Odd ${num}`)

}

demo(0,10);
demo1(0);
even(0);

let x = Number(prompt("Enter Your name: "));  //Input will always take a string value from user
console.log(typeof x);


if(x % 2 === 0)
    console.log(`Even ${x}`)
else if(x == 0)
    console.log(`It is ${x}`)
else 
    console.log(`Odd ${x}`)

let num = Number(prompt("Enter Your number: "));  
evenOdd(num);

function evenOdd(a){
    if(a % 2 === 0 && a != 0)
        console.log(`Even ${a}`)
    else if(a == 0)
        console.log(`It is ${a}`)
    else
        console.log(`Odd ${a}`)
}

