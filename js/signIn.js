User user("mohamed","1/4/1996","mohamed@gmail.com","12345678","0","1")
User.storeObjectllo(user)
var email=document.getElementById("email");
var password=document.getElementById("password");
function printEmail() {
	console.log(email.value);
}


var loginBtn=document.getElementById("login");
loginBtn.addEventListener("click",printEmail)