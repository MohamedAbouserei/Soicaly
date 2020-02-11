class Post
{
constructor(text,location,name,time)
{
this.text=text;
this.location=location;
this.name=name;
this.time=time;
}
storePost = function () 
{
    localStorage.setItem(this.time, JSON.stringify(this));
}


}

getPostData = function (local) 
{
    //sessionStorage.setItem("onlineuser", "medoaboserii");
    var posttext=document.getElementById("posttext").value;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var email = sessionStorage.getItem("onlineuser");
     
    newpost = new Post(posttext,local,JSON.parse(User.getObjectbyEmail(email)).name,dateTime)
    document.getElementById("posttext").value="";
    newpost.storePost();
    $("#exampleModal").modal("hide");
    
    
}
