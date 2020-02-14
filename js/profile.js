// validation
var submitButton = document.getElementById("submit");
var username = document.getElementById("userName");
var password = document.getElementById("password");
var phone = document.getElementById("phone")
var email = document.getElementById("email")
var dob = document.getElementById("dob")
var errorsContainer = document.getElementsByClassName("errors")[0];
var errors = document.getElementById("error-messages");
var str
// image 
var image = document.getElementById("image");
// var imgData = getBase64Image(image);
var uploadImageButton = document.getElementById("imageupload")
uploadImageButton.addEventListener("click", changeImagePhoto);

function changeImagePhoto(e) {
    var reader = new FileReader();
    reader.onload = function () {
        image.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    uploadImageButton.style.display = "none"
}

// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

// end of image data
myemail = sessionStorage.getItem("onlineuser");

var sessionobj = JSON.parse(User.getObjectbyEmail(myemail));
window.addEventListener("load", setInputField);

function setInputField() {
    username.value = sessionobj.name
    password.value = sessionobj.password
    phone.value = sessionobj.phone
    email.value = sessionobj.email
    dob.value = sessionobj.DOB
    if (sessionobj.imagesrc) {
        image.src = sessionobj.imagesrc
    }
    //image.src=sessionobj.imagesrc
}


submitButton.addEventListener("click", editObject)

function editObject(ev) {
    ev.preventDefault();
    errorsContainer.style.display = "none"
    str = ""

    if (validateName() && validatePassword() && validatePhonenumber()) {
        let imagen = image.getAttribute('src');
        console.log(imagen)
        sessionobj.name = username.value;
        sessionobj.password = password.value;
        sessionobj.phone = phone.value;
        sessionobj.email = email.value;
        sessionobj.DOB = dob.value
        sessionobj.imagesrc = image.src
        User.storeObjectllo(sessionobj)
        setInputField(sessionobj)
        console.log("your data saved")
    }
}

function validateName() {
    if (username.value === "") {
        str += "<li>Name is required</li>"
        errorsContainer.style.display = "block"
        errors.innerHTML = str;        
        return false;
    } else {
        return true;
    }
}

function validatePassword() {
    if (password.value.length >= 8) {
        console.log("valid pass")
        return true;
    } else {
        str += "<li>Password is invalid</li>"
        errorsContainer.style.display = "block"
        errors.innerHTML = str;
        return false;
    }
}

// validate phone
function validatePhonenumber() {
    var phoneno = /^\d{11}$/;
    if (phone.value.match(phoneno)) {
        console.log("valid phone")
        return true;
    } else {
        str += "<li>Phone is invalid</li>"
        errorsContainer.style.display = "block"
        errors.innerHTML = str;
        return false;
    }
}