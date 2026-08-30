let changeText = () => {
    let text = document.getElementById("react");
    console.log(text);          // <h1 id="react" style="color: red; background-color: blue; text-align: center;">Hello Ayush</h1>  
    console.log(typeof text);   //Object

    console.log(text.innerText);    // Hello React 
    console.log(text.innerHTML);    // Hello React 

    text.style.color = "red";
    text.style.backgroundColor = "blue"
    text.style.textAlign = "center";
    text.innerText = 'Hello Ayush'
}
changeText();

let class1 = document.getElementsByClassName("text");
console.log(class1);    //HTMLCollection(2)
console.log(typeof class1); //object
console.log(class1[0].innerHTML);

let obj = {
    ele1: class1[0],
    ele2: class1[1]
}

console.log(obj.ele1.innerText);
console.log(obj.ele2.innerText);

let text2 = document.getElementsByTagName("h1");
console.log(text2);