function validateForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");

    var username = usernameInput.value.trim();
    var password = passwordInput.value.trim();

    // Clear previous error messages and styles
    usernameError.textContent = "";
    passwordError.textContent = "";
    usernameInput.classList.remove("is-invalid");
    passwordInput.classList.remove("is-invalid");

    var isValid = true;

    if (!username) {
        usernameError.textContent = "Please enter your username.";
        usernameInput.classList.add("is-invalid");
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Please enter your password.";
        passwordInput.classList.add("is-invalid");
        isValid = false;
    }

    if (isValid) {
        window.location.href = "reportanalysis.html";
    }

    return false;
}
