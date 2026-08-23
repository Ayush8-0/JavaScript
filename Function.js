//FUNCTION DECLARATION
function display(){
    console.log("Hello World!");
}
display();

//DEFAULT PARAMATER FUNCTION
function add(a = 0, b){  //b= 0 
    console.log(a+b);   //b is undefined so we can set default value to 0 and a+b means 4+undefined = NaN 
}
add(4);

//FUNCTION EXPRESSION
let sub = function demo(a, b){
    console.log(a-b);
}
sub(3,2);

//ANONYMOUS FUNCTION

let mul = function(a,b){
    console.log(a*b);
}
mul(3,2);

//IMMEDIATE INVOKED FUNCTION EXPRESSION (IIFE)
(
    function call(){
        console.log("Immediate Invoked Function Expression");
    }
)();

//BUILT-IN FUNCTION
//alert("Hello World!");

//RETURN
function returnAdd(a,b){
    return a+b
}
let x = returnAdd(3,4);
console.log(x);
console.log(returnAdd(3,4));

//ARROW FUNCTION
let arrowAdd = (a,b) => a+b;
console.log(arrowAdd(8,4));

let sum = (a,b) => {
    console.log(a+b);
}
sum(5,9)

//Arguments Object
function displayAll(){
    console.log(arguments);
    console.log(arguments[0]); 
}
displayAll(1,2,3,4,5,6,7,8,9,0)

//HIGHER ORDER AND CALLBACK FUNCTION
let sumHO = (a,b, callback) =>{
    let sum = a+b;
    callback(sum)
}
sumHO(3,4, (sum) =>{
    console.log(sum);

})

let evenOdd = (num, callBack) => {
    if(num % 2 === 0 && num != 0){
        return callBack(`Even ${num}`);
    }
    else{
        return callBack(`Odd ${num}`);
    }
}
let evenOddNew = evenOdd(4, (result) =>{
    return result;
})
console.log(evenOddNew);

//NESTED FUNCTION
let parent = () => {
    console.log("Parent Function");
    let child = () => {
        console.log("Child Function");
    }
    child();
}
parent()


//Generator Function
function *demo(){
    console.log("Start the Function");
    yield "Hello";

    console.log("Restarting tHhe Function");
    yield "World";

    return "End the Function";
}

let function1 = demo();
console.log(function1.next().value)
console.log(function1.next().value)
console.log(function1.next().value)

console.log(Boolean(function1.next().value)) //undefined;
console.log("-------------------------- BOOLEAN TYPECASTING ----------------------------")
console.log("true: ",Boolean(true))
console.log("false: ",Boolean(false))
console.log("-1: ",Boolean(-1));
console.log("0: ",Boolean(0))
console.log("1: ",Boolean(1))
console.log("Empty String: ",Boolean(""))
console.log("Hello: ",Boolean("Hello"))
console.log("null: ",Boolean(null))
console.log("undefined: ",Boolean(undefined))
console.log("Object: ",Boolean({}))
console.log("Array: ",Boolean([]))

if(1){
    console.log("1 is true");
}else{
    console.log("1 is false");
}

if(null){
    console.log("null is true");
}else{
    console.log("null is false");
}

if(" "){
    console.log("Space is true");
}else{
    console.log("Space is false");
}

//Hositing: Accessing Before it is declared
console.log(aa);
var aa = 10;
console.log(aa)

