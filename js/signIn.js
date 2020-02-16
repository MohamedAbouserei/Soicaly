var email = document.getElementById("email");
var password = document.getElementById("password");
var returnedObj;
var error = document.getElementById("notFound");
var loginBtn = document.getElementById("login");
var form = document.getElementById("form");

function printEmail() {
	if (email.value.length != 0) {
		if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email.value) && password.value.length >= 8) {
			returnedObj = User.getObjectbyEmail(email.value);
			console.log("this the returened object" + returnedObj)
			if (returnedObj != null) {
				var test = JSON.parse(returnedObj);
				if (email.value == test.email && password.value == test.password) {
					console.log("Donnnnnnnnnnne")
					//sessionStorage.setItem("onlineuser",test)
					test.status = true;
					 User.storeObjectllo(test);
					error.innerHTML = ""
					var userEmail = email.value;
					console.log(userEmail)
					sessionStorage.setItem("onlineuser", userEmail);
					window.location.replace("./posts.html");
				} else {
					printErrorMessage()
				}

			}
			if (returnedObj == null) {
				printErrorMessage()
			}

		}

	}

}

function printErrorMessage(argument) {
	error.innerHTML = "Sorry The Username Or Passowrd Are In Correct";
	password.value = ""
	console.log("Sorrrrraaaaaaaaaaaaay")

}


loginBtn.addEventListener("click", printEmail)