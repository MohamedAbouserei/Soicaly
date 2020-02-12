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
    sessionStorage.setItem("onlineuser", "medoaboserii");
    var posttext=document.getElementById("posttext").value;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    var email = sessionStorage.getItem("onlineuser");

     console.log(User.getObjectbyEmail(email))
    newpost = new Post(posttext,local,JSON.parse(User.getObjectbyEmail(email)).name,dateTime)
    document.getElementById("posttext").value="";
    newpost.storePost();
    $("#exampleModal").modal("hide");
    
    
}
noPost=0;

setInterval(function(){
    var PostContianer = document.getElementById('Posts');
    var archive = new Array();
    // Notice change here
   var keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
       
        if(!keys[i].indexOf('@') > -1 )
    archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));
    }
    if(keys.length>noPost){
    PostContianer.innerHTML="";
    PostContianer.innerHTML += preparePost();
    }
    
}, 1000 );
function preparePost()
{
    var archive = new Array();
    // Notice change here
   var keys = Object.keys(localStorage),
    i = keys.length;

    while ( i-- ) {
       
        if(!keys[i].indexOf('@') > -1 )
    archive[ keys[i] ] = JSON.parse(localStorage.getItem( keys[i] ));
    }
    var card="";
    for (var key in archive) {
        if (archive.hasOwnProperty(key))
         { 
             var Data=archive[key];
             noPost=keys.length;
            console.log("data is     "+Data.name);
            card +=  ' <div class=\"box\">\n' ;
            card +=  '                <i class=\"fa fa-behance fa-3x\" aria-hidden=\"true\"></i>\n' ;
            card +=  '                <div class=\"box-title\">\n' ;
            
            if(Data.hasOwnProperty("location"))
            card +=  '                  <h3>"'+Data.name+"         "+"is at "+Data.location+'"</h3>\n' ;
            else
            card +=  '                  <h3>"'+Data.name+'"</h3>\n' ;
            card +=  '                </div>\n' ;
            card +=  '                <div class=\"box-text\">\n' ;
            card +=  '                  <span>"'+Data.text+'"</span>\n' ;
            card +=  '                </div>\n' ;
            card +=  '                <div class=\"box-btn\">\n' ;
            card +=  '                    <a href=\"#\">Comments</a>\n' ;
            card +=  '               </div>\n' ;
            card +=  '               </div>' ; 
        }
        }
  
 
   
    return card;

}
