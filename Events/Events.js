let btn = document.getElementById("btn");
let box = document.getElementById("box");

btn.addEventListener("click", (event) => {

    console.log("Button Is Clicked")
    console.log(event.target);
    console.log(event.target.id)
    event.target.style.backgroundColor = "MediumSeaGreen";
})

box.addEventListener("click", (event) => {
    console.log("Box Is Clicked")
    console.log(event.target);
    console.log(event.target.id)
})

box.addEventListener("mouseover", (event) =>{
    console.log("Mouse Over Box");
    console.log(event.target);
    console.log(event.target.id)
})

box.addEventListener("mouseout", (event) =>{
    console.log("Mouse Out Box");
    console.log(event.target);
    console.log(event.target.id)
})

let ip = document.getElementById("username");
ip.addEventListener("keyup", (event) => {
    console.log("Key Up Event");
    console.log(event.target.value);
    console.log(event.target.id)
})

ip.addEventListener("keydown", (event) => {
    console.log("Key Down Event");
    console.log(event.target.value);
    console.log(event.target.id)
})

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", (event) => {
    
    console.log("Submit Button Is Clicked")
    console.log(event.target);
    console.log(event.target.id)
    console.log(ip.value);
})

let name = document.getElementById("name");
let submitFormBtn = document.getElementById("submitForm");
submitFormBtn.addEventListener("click", (event) => {
    event.preventDefault(); //It keeps prevents the default behaviour of the browser or a particular element
    console.log("Form Submitted");
    console.log(name.value);
})

