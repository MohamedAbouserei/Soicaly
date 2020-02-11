class User {
    constructor(name,DOB,email,password,phone,status,id)
{
this.name=name;
this.DOB=DOB;
this.email=email;
this.password=password;
this.phone=phone
this.status=status;
this.id=id;
}
static storeObjectllo = function (userObject) {
    localStorage.setItem(userObject.email, JSON.stringify(userObject));
}
static getAllObjects = function (){
    var archive = {}, // Notice change here
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
    archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }
return archive;
 }
 static getObjectbyEmail = function (email){
    
    var archive = localStorage.getItem(email);
    
return archive;
 }
}




// //var user=new User("sabreen","1996-05-16","sabreensalama29@gmail.com","1234","01122661983");
// User.storeObjectllo(user)

// var user1=new User("salma","1996-05-16","sabreensalama@gmail.com","1234","01122661983");
// User.storeObjectllo(user1)

// session storage
myemail="sabreensalama@gmail.com"
sessionStorage.setItem("onlineuser",JSON.stringify(myemail));

var sessionobj=JSON.parse(User.getObjectbyEmail(myemail));
window.addEventListener("load", setInputField);
function setInputField()
{
username.value=sessionobj.name
password.value=sessionobj.password
phone.value=sessionobj.phone
email.value=sessionobj.email
dob.value=sessionobj.DOB
}


submitButton.addEventListener("click",editObject)
function editObject()
{
 sessionobj.name=username.value;
 sessionobj.password=password.value;
 sessionobj.phone=phone.value;
 sessionobj.email=email.value;
 sessionobj.DOB=dob.value
 User.storeObjectllo(sessionobj)
 setInputField(sessionobj)
 console.log("your data saved")


}
