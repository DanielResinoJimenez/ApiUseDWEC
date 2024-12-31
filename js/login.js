/* Login JS */

let signin = document.getElementById("signin");
let loginbtn = document.getElementById("loginbtn");
let login = document.getElementById("login");
let register = document.getElementById("register");
let nickRegis = document.getElementById("nickRegis");
let passRegis = document.getElementById("passRegis");
let pass2Regis = document.getElementById("pass2Regis");
let regisUser = document.getElementById("regisUser");
let formRegister = document.getElementById("formRegister");
let userError = document.getElementById("userError");
let passError = document.getElementById("passError");
let correctRegis = document.getElementById("correctRegis");
let loginForm = document.getElementById("loginForm");
let errorLogin = document.getElementById("errorLogin");
let loginUser = document.getElementById("loginUser");
let loginPass = document.getElementById("loginPass");

signin.addEventListener("click", () => {
    login.style.display = "none";
    register.style.display = "flex";
    errorLogin.classList.add("hidden");
})

loginbtn.addEventListener("click", () => {
    login.style.display = "flex";
    register.style.display = "none";
})

let validity = false;

formRegister.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!nickRegis.validity.valid) {
        userError.classList.remove("hidden");
        validity = false;

    } else {
        userError.classList.add("hidden");
        validity = true;
    }

    if (!passRegis.validity.valid) {
        passError.classList.remove("hidden");
        validity = false;

    } else {
        passError.classList.add("hidden");
        validity = true;
    }

    if (validity) {
        if (passRegis.value === pass2Regis.value) {
            let newUser = {
                'username': nickRegis.value,
                'password': passRegis.value
            }

            
            let jsonArray = JSON.parse(localStorage.getItem('usersArray')) || [];

            
            jsonArray.push(newUser);

            
            localStorage.setItem('usersArray', JSON.stringify(jsonArray));

            correctRegis.classList.remove("hidden");
            login.style.display = "flex";
            register.style.display = "none";
        } else {
            passError.classList.remove("hidden");
            passError.textContent = "The passwords are not the same";
        }
    }
});

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let users = JSON.parse(localStorage.getItem('usersArray'));
    let match = false;

    for(let user of users){
        if(user.username === loginUser.value){
            if(user.password === loginPass.value){
                window.location.href = "./pages/start.html";
                errorLogin.classList.add("hidden");
                match = true;
                break;
            }else{
                errorLogin.classList.remove("hidden");
            }
            break;
        }
    }

    if(!match){
        errorLogin.classList.remove("hidden");
    }

})


