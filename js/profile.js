
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
submitButton.addEventListener("click", validateName)

function validateName(e) {
    e.preventDefault();
    errorsContainer.style.display="none"
    str=""

    if (username.value === "") {
        str += "<li>Name is required</li>"
        errorsContainer.style.display = "block"
        errors.innerHTML = str;
    } else {

        console.log(name)
    }

}
// validate password
submitButton.addEventListener("click", validatePassword)

function validatePassword(e) {
    e.preventDefault();
    errorsContainer.style.display="none"
   
    var passwordpattern = /[0-9]/;
    if (password.value.match(passwordpattern)) {
        console.log("valid pass")
    }
    else {
       
        str += "<li>Password is invalid</li>"
        errorsContainer.style.display = "block"
        errors.innerHTML = str;
    }
}

// validate phone
submitButton.addEventListener("click", validatePhonenumber)

function validatePhonenumber()
{
  var phoneno = /^\d{11}$/;
  if(phone.value.match(phoneno))
        {
          console.log("valid phone")
        }
      else
        {
            str += "<li>Phone is invalid</li>"
            errorsContainer.style.display = "block"
            errors.innerHTML = str;
        }
}












