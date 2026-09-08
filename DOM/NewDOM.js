let box = document.getElementById("box");
console.log(box);   //<div id="box"></div>

let y = document.createElement("h1");
console.log(y);
y.innerText = "Hello World"
console.log(y); //<h1>Hello World</h1>
//box.appendChild(y);

let z = document.createElement("p");
z.innerText = "Hello Kunal"
//box.appendChild(z);

box.append(y,z)