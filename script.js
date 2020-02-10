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
storeObjectllo = function () {
    localStorage.setItem(this.email, JSON.stringify(this));
}
getAllObjects = function (){
    var archive = {}, // Notice change here
    keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
    archive[ keys[i] ] = localStorage.getItem( keys[i] );
    }
return archive;
 }
 getObjectbyEmail = function (email){
    
    var archive = localStorage.getItem(email);
    
return archive;
 }
}
