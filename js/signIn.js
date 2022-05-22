

const signIn = document.querySelector("#login-form");
const id = signIn.querySelector("#id");
const password = signIn.querySelector("#pwd");
const signInButton = signIn.querySelector("#signIn");
const signUpButton = signIn.querySelector("#signUp");

function handleSignUp(event) {
    event.preventDefault();
    const inputID = id.value;
    const inputPWD = password.value;

    const pwd = localStorage.getItem(inputID);

    if (inputID === "" || inputPWD === "") {
        alert("아이디와 비밀번호를 입력하세요!");
        id.value = "";
        password.value = "";
    } else if (pwd !== null) {
        alert("이미 존재하는 아이디입니다!");
        id.value = "";
        password.value = "";
    } else {
        localStorage.setItem(inputID, inputPWD);
        alert("회원가입되었습니다!")
    }
}

function handleSignInButton(event) {
    event.preventDefault();
    const inputID = id.value;
    const inputPWD = password.value;
    const pwd = localStorage.getItem(inputID);
    if (pwd === inputPWD) {
        signIn.classList.add("hidden");
        const greeting = document.querySelector("#greeting");
        greeting.innerText = `Hello, ${inputID}`

        displayTodos(inputID);
    } else {
        alert("아이디와 비밀번호를 다시 입력하세요!");
        id.value = "";
        password.value = "";
    }
}

signInButton.addEventListener("click", handleSignInButton);
signUpButton.addEventListener("click", handleSignUp);
