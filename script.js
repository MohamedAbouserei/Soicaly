class User {
    constructor(name,DOB,email,password,status,id)
{
this.name=name;
this.DOB=DOB;
this.email=email;
this.password=password;
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
    console.log("The mail you send Is:"+email);
    var archive = localStorage.getItem(email);
	return archive;
 }
}
