/*
Promise: 
Promise is use to handle the asynchronous operations
(Asynchronous Operations: Complex operations like calling API, handling timer, file reading)
It have 3 states pending, fullfil and rejected

Promise have 2 states or 2 methods specifically i.e resolve and reject
If promise is true or accepted then resolve block gets execute else reject block will get execute 
By printing the Promise object p we get Promise {<state(fullfilled, rejected)>: 'Message from resolve or rejected method'}

If we have to directly want to print the value then from resolve and reject method then we have to use promise_Obj.then()
promise_Obj.then(res): It is use to accept the data from resolve() method if the Promise is resolved
promise_Obj.catch(err): It is use to accept the data from reject() method if Promise is rejected
promise_Obj.finally(): Finally block gets execute irrespective of Promise is accepted or rejected  
*/

let p = new Promise((resolve, reject) => {
    let x = true    //Promise {<fulfilled>: 100}
    //let x = false;  //Promise {<rejected>: 'Data Not Found'}
    if(x) {
        resolve(100)
    }else{
        reject("Data Not Found")
    }
});
console.log(p); //Promise Rejected: (O/P: Promise {<rejected>: 'Data Not Found'})  Promise Fullfilled: (O/P: Promise {<fulfilled>: 100})  

//if promise get resolved, "then" block will be executed
p.then((res) =>{
    console.log("From then Block: "+res)    //From then Block: 100
})

//catch() block will execute if promise is rejected
p.catch((err) =>{
    console.log("From Catch Block: "+err)   //From Catch Block: Data Not Found
})

//finally() block will get executed irrespective of promise is resolved or rejected
p.finally(() => console.log("Promise Completed"))   //Promise Completed


//All in Single line
p.then((res) => console.log(res)).catch((err) => console.log(err)).finally(() => console.log("Promise Completed"))
// 100
// promise.js:43 Promise Completed

p
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() => console.log("Promise Completed"))
// 100
// promise.js:43 Promise Completed

console.log("************************************") 
//First all the synchronous code(promise p and p1 console.log("********")) will get executen then all then, catch and finally execute hoga

//PROMISE CHAINING
let p1 = new Promise((resolve, reject) =>{
    //resolve("Interview mail Received")
    reject("Interview Mail not received");
})
console.log(p1);
p1.then((res) => {
    console.log(res)
    return "Interview is Cleared" })
.then((res) => {
    console.log(res);
    return "Offer letter Generated"})
.then((res) => {
    console.log(res);
    return "Joining Letter Generated"
})
.then((ele) =>{
    console.log(ele)
    return 'Finally Joined'
})
.then((res) => console.log(res))
.catch((err) => {
    console.log(err)
    return 'Find Another Job'})
// .catch((err) => {
//     console.log(err)
//     })   
// Actual Problem is if catch block returns 
// the code successfully then promise chain get
// resolved, again  we have to again use then 
// block to execte the returned code by the 
// catch block
.then((err) => {
    console.log(err)
    }) 

.finally(() => console.log("Promise p2 Completed"))