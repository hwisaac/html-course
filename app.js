const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    // preventDefault는 event의 기본행동이든지 발생되지 않도록 막는다.
    // 토마토 대신 event를 쓴다
    event.preventDefault(); 

    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);