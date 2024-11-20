


const validCredentials = {
    username: "like",
    password: "1234"
};

//로그인 / 에러
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    // 입력 값 가져오기
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // 아이디와 비밀번호 확인
    if (username === validCredentials.username && password === validCredentials.password) {
        alert("Login successful!");
        window.location.href = "../../index.html"; 
    } else {
        alert("아이디와 비밀번호를 확인해주세요 !");
    }
});
