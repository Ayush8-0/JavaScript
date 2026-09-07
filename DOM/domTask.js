let changeImg = () => {
    let img = document.getElementById("myImg")
    console.log(img);
     //<img src="https://tse1.mm.bing.net/th/id/OIP.S_fzXR1vO8V5pfHjGWilFgHaGG?r=0&amp;rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3" id="myImg" alt="Example decorative image" title="Example decorative image"></img>
 
    img.src = "https://images.thedirect.com/media/photos/gwen2.png"
    //img.style.borderRadius = '20%'     
}

let users = [];

let handelSubmit = () => {
    let uName = document.getElementById("uName")
    let uPass = document.getElementById("uPass");
    console.log(uName.value, uPass.value);

    let obj = {
        username: uName.value,
        password: uPass.value
    }
    console.log(obj)
    users.push(obj);

    uName.value = "";
    uPass.value = "";
    console.log(users,"*******");
} 
console.log(users)

let cnt = 0
let cntr = document.getElementById("cntr")
console.log(cntr)
let add = () => {
    cnt++;
    cntr.innerText = cnt;
}
let sub = () => {
    cnt--;
    if(cnt>=0)
    cntr.innerText = cnt;
    else
    alert("Negative values")
}

let reset = () => {
    cnt = 0;
    cntr.innerText = cnt;
}

let box = document.getElementById("box");
let switchItems = document.getElementsByClassName("switch");
box.style.backgroundColor = 'white'
cntr.style.color = 'black';

    for(let item of switchItems){
        item.style.color = 'black';
        item.style.backgroundColor = "white";
    }

let change = () => {
    if(box.style.backgroundColor === "white"){
        box.style.backgroundColor = 'black';
        cntr.style.color = "white";
        for(let item of switchItems){
        item.style.color = 'white';
        item.style.backgroundColor = "black";
        }
    }
    else{
        box.style.backgroundColor = 'white';
        cntr.style.color = "black";
        for(let item of switchItems){
        item.style.color = 'black';
        item.style.backgroundColor = "white";
        }
    }
}