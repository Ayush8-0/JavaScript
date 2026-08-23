//GLOBAL SCOPE 
var a = 100;
let b = 200;
const c = 300;

console.log("From Global Scope",a,b,c)

//FUNCTION SCOPE
let demo = () => {
    var x = 10;
    let y = 20;
    const z = 30;
    
    console.log("From Function",a,b,c);
    console.log("From Function",x,y,z);    
};
demo();

//BLOCK SCOPE
if(true){
    var d = 1;
    let e = 2;
    const f = 3;

    console.log("From Block",a,b,c);
    console.log("From Block",d,e,f)
    //console.log("From Block",x,y,z) //Error: ReferenceError: x,y,z is not defined
}
console.log("From Block",d) //var is function scoped so it can be accessed outside the block
//console.log("From Block",e) //Error: ReferenceError: e is not defined
//console.log("From Block",f) //Error: ReferenceError: f is not defined

//LEXICAL SCOPE
let parent = () => {
    let a = 10;
    let b = 20;
    const c = 30;
    let child = () => {
        console.log("From Child",a,b,c);
    }
    child();
}
parent()


