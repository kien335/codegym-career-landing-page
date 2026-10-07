const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Đăng ký tư vấn thành công!");

    form.reset();
});