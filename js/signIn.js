var myUser = new User("mohamed","1/4/1996","mohamed@gmail.com","12345678","0","1");
var otherUser = new User("ahmed","1/4/1996","ahmed@gmail.com","12345678","0","1");
var thirdUser = new User("youssef","1/4/1996","youssef@gmail.com","12345678","0","1");
var email=document.getElementById("email");
var password=document.getElementById("password");
var returnedObj;
var error=document.getElementById("notFound");
var loginBtn=document.getElementById("login");
var form=document.getElementById("form");
User.storeObjectllo(myUser);
User.storeObjectllo(otherUser)
 User.storeObjectllo(thirdUser)

form.addEventListener("submit", function(event){
  event.preventDefault();
});

function printEmail() {
	if (email.value.length != 0) {
		if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.value) && password.value.length >= 8) {
			returnedObj=User.getObjectbyEmail(email.value);
			var test=JSON.parse(returnedObj);
			console.log(test.password)
			console.log(test.email)
			if (email.value == test.email && password.value == test.password) {
			console.log("Donnnnnnnnnnne")
			User.storeToSessionStorage(test)
			test.status=1;
			User.storeToSessionStorage(test)
			error.innerHTML = ""	
			//window.location.replace("https://www.google.com");
			}
			else{
				error.innerHTML = "Sorry The Username Or Passowrd Are In Correct";
				password.value=""
				console.log("Sorrrrraaaaaaaaaaaaay")
			}
		}
	
	
	}

}
loginBtn.addEventListener("click",printEmail)
