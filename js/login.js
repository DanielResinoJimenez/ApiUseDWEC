/* Login JS */

let signin = document.getElementById("signin");
let loginbtn = document.getElementById("loginbtn");
let login = document.getElementById("login");
let register = document.getElementById("register");

signin.addEventListener("click", () => {
    login.style.display = "none";
    register.style.display = "flex";
})

loginbtn.addEventListener("click", () => {
    login.style.display = "flex";
    register.style.display = "none";
})