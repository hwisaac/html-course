// 스트링은 대문자로 저장한다
const HIDDEN_CLASSNAME = "hidden";
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    // 로컬스토리지에 저장할 수 있다. localStorage.setItem("키", "벨류")
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}` ;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

loginForm.addEventListener("submit", onLoginSubmit);
