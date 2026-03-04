document.getElementById("registerForm").onsubmit = function () {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();
    let className = document.getElementById("class").value;

    if (username === "") {
        alert("Vui lòng nhập tên đăng nhập");
        return false;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải ít nhất 6 ký tự");
        return false;
    }

    if (email === "") {
        alert("Vui lòng nhập email");
        return false;
    }

    if (className === "") {
        alert("Vui lòng chọn lớp");
        return false;
    }

    alert("Đăng ký thành công!");
    return true;
};