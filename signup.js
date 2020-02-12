
if(sessionStorage.getItem("onlineuser")){
    location.replace("./posts.html");
}

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const dob = document.getElementById("dob");
const signupForm = document.getElementById("signup-form");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const passwordConfirmError = document.getElementById("confirm-password-error");
const dateError = document.getElementById("date-error");

signupForm.onsubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
     const user = new User(name.value,dob.value,email.value,password.value,true);
     User.storeObjectllo(user);
     sessionStorage.setItem("onlineuser",email.value);
    }
}

function validateForm() {
    let isValid = true;
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    passwordConfirmError.innerHTML = "";
    dateError.innerHTML = "";

    if (!name.value) {
        nameError.innerHTML = "Name can not be empty";
        isValid = false;
    }
    if (!password.value) {
        passwordError.innerHTML = "Password can not be empty";
        isValid = false;
    }
    if (passwordConfirm.value != password.value) {
        passwordConfirmError.innerHTML = "Password does not match"
        isValid = false;
    }
    if (!validateEmail(email.value)) {
        emailError.innerHTML = "Not a valid email";
        isValid = false;
    } else {
        const user = User.getObjectbyEmail(email.value);
        if (user) {
            emailError.innerHTML = "This email already exists";
            isValid = false;
        }
    }
    if (!dob.value) {
        dateError.innerHTML = "Date of birth can not be empty"
        isValid = false;
    }
    return isValid;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}