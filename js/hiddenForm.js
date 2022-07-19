// const helloButton = document.querySelector("#input-form button");
const loginForm = document.querySelector("#input-form");
const loginInput = document.querySelector("#input-form input");
const loginText = document.querySelector("#login h1")
const greeting = document.querySelector("#greeting");
// const githubIcon = document.querySelector("#github");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginText.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML = `Hello, ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    // githubIcon.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername);
}