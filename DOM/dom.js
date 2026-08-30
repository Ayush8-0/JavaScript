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
console.log(text2);                 //HTMLCollection(4) [h1.text, h1#react, h1.text, h1#html, react: h1#react, html: h1#html]
console.log(text2[0].innerHTML);    // Hello Java 
console.log(text2[1].innerText);    //Hello Ayush
console.log(text2[2].innerText);    //Hello JavaScript

let text3 = document.querySelector("h1");
console.log(text3.innerHTML);   //It only prints the first initial h1 text 

let text4 = document.querySelector(".text");    //It only prints the first initial class text
console.log(text4.innerText+"*********");       //Hello Java*********

let text5 = document.querySelector("#react") //It prints the id

/*Query Selector: 
 In query selector we can target any element.
Targeting tag: document.querySelector("h1");
Targeting id: document.querySelector("#id");
Targeting class: document.querySelector(".class_Name");  
*/

let text6 = document.querySelectorAll("h1");    //NodeList(4) [h1.text, h1#react, h1.text, h1#html]
console.log(text6[0].innerText);    //Hello Java

let text7 = document.querySelectorAll("#react");    
console.log(text7[0]);      //<h1 id="react" style="color: red; background-color: blue; text-align: center;">Hello Ayush</h1>

let text8 = document.querySelectorAll("box");
console.log(text8);     //NodeList []
console.log(text8.innerHTML)    //undefined