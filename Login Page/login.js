function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if(username ==="SCOTT" && password === "TIGER"){
        console.log("Login successful!");
        window.location.href = "./home.html";
    }
    else {
        alert("Invalid credentials. Please try again.");
    }


}