class Post {
    constructor(text, location, name, email, time) {
        this.text = text;
        this.location = location;
        this.name = name;
        this.time = time;
        this.comments = [];
        this.email = email;
    }
    storePost = function () {
        localStorage.setItem(this.time, JSON.stringify(this));
    }
    static getPost = function (postKey) {
        var archive = JSON.parse(localStorage.getItem(postKey));

        return archive;
    }
    static storeComment = function (key, comment, name) {
        var archive = JSON.parse(localStorage.getItem(key));
        archive.comments = archive.comments.concat(name + ":" + comment);
        localStorage.setItem(archive.time, JSON.stringify(archive));

    }

}
getPostData = function (local) {
    //sessionStorage.setItem("onlineuser", "medoaboserii@gmail.com");
    var posttext = document.getElementById("posttext").value;
    if (posttext != '') {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var email = sessionStorage.getItem("onlineuser");

        var user = JSON.parse(User.getObjectbyEmail(email))
        newpost = new Post(posttext, local, user.name, user.email, dateTime)
        document.getElementById("posttext").value = "";
        newpost.storePost();
        $("#exampleModal").modal("hide");
    } else {
        alert("You have to Write Something")
    }

}
noPost = 0;

setInterval(function () {
    var PostContianer = document.getElementById('Posts');
    var archive = new Array();
    // Notice change here
    var keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {

        if (!keys[i].includes("@") && !keys[i].includes("lastInsertedId") && !keys[i].includes("newcomment") && !keys[i].includes("newlist"))
            archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    if (keys.length > noPost || localStorage.getItem("newcomment") != "0") {
        PostContianer.innerHTML = "";
        PostContianer.innerHTML += preparePost();
        var delay = setTimeout(function () {
            localStorage.setItem("newcomment", "0");
        }, 1500);

    }

}, 1000);

function preparePost() {
    var archive = new Array();
    // Notice change here
    var keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {

        if (!keys[i].includes("@") && !keys[i].includes("lastInsertedId") && !keys[i].includes("newcomment") && !keys[i].includes("newlist"))
            archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    var card = "";
    for (var key in archive) {
        if (archive.hasOwnProperty(key)) {
            var Data = archive[key];

            var user = JSON.parse(User.getObjectbyEmail(Data.email));

            const imageSrc = user && user.imagesrc ? user.imagesrc : "./images/avatar.jpg";

            noPost = keys.length;
            console.log("data is     " + Data.name);
            card += ' <div class=\"box\">\n';
            //       card += '                <i class=\"fa fa-behance fa-3x\" aria-hidden=\"true\"></i>\n';
            card += '<img width="50" height="50"  src=' + imageSrc + ' >'
            card += '                <div class=\"box-title\">\n';

            if (Data.hasOwnProperty("location"))
                card += '                  <h3>' + Data.name + "     " + "is at " + Data.location + '</h3>\n<span class=\"text-muted\">' + key + '</span>\n';
            else
                card += '                  <h3>' + Data.name + '</h3>\n<span class=\"text-muted\">' + key + '</span>\n';
            card += '                </div>\n';
            card += '                <div class=\"box-text\" style="overflow-wrap: break-word;">\n';
            card += '                  <span>' + Data.text + '</span>\n';
            card += '                </div>\n';
            card += '                <div class=\"box-btn\">\n';
            card += '                    <a href=\"#\">Comments</a>\n';
            card += '               </div>\n';
            //comments
            if (Data.comments.length > 0) {
                for (var i = 0; i < Data.comments.length; i++) {
                    var commentContent = Data.comments[i].split(":");
                    card += '<div class=\"col-sm-12\">\n';
                    card += '<div class=\"panel panel-default\">\n';
                    card += '<div class=\"panel-heading\">\n';
                    card += '<strong>' + commentContent[0] + '</strong>';
                    card += '</div>\n';
                    card += '<div class=\"panel-body\">\n';
                    card += '' + commentContent[1] + '\n';
                    card += '</div><!-- /panel-body -->\n';
                    card += '</div><!-- /panel panel-default -->\n';
                    card += '</div><!-- /col-sm-12 -->\n';
                    card += '<hr>\n';
                }
            }


            card += '                <div class=\"box-btn\">\n';
            card += '                    <input type=\"text\" placeholder="write a comment" class="form-control" rows="5" name="' + key + '" id="Comment" >\n';
            card += '               </div>\n';
            card += '               </div>';
            card += '<hr><br><br>'
        }

    }
    return card;
}

document.addEventListener('keypress', function (e) {
    if (e.target && e.target.id == 'Comment' && e.key === 'Enter') {

        if (e.target.value != '') {
            localStorage.setItem("newcomment", "1");
            Post.storeComment(e.target.name, e.target.value, JSON.parse(User.getObjectbyEmail(sessionStorage.getItem("onlineuser"))).name)
            e.target.value = "";
        }

    }
});
document.querySelector("#logout").addEventListener("click", function (e) {
    User.logout()
});

setInterval(function () {
    var userContianer = document.getElementById('users');
    var archive = new Array();
    // Notice change here
    var keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {

        if (keys[i].includes("@") && !keys[i].includes("lastInsertedId") && !keys[i].includes("newcomment") && !keys[i].includes("newlist"))
            archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    if (localStorage.getItem("newlist") != "0") {
        userContianer.innerHTML = "";
        userContianer.innerHTML += prepareUsers();
        var delay = setTimeout(function () {
            localStorage.setItem("newlist", "0");
        }, 1500);

    }

}, 1000);


function prepareUsers() {
    var archive = new Array();
    // Notice change here
    var keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {

        if (keys[i].includes("@") && !keys[i].includes("lastInsertedId") && !keys[i].includes("newcomment") && !keys[i].includes("newlist"))
            archive[keys[i]] = JSON.parse(localStorage.getItem(keys[i]));
    }
    var record = "";
    for (var key in archive) {
        if (archive.hasOwnProperty(key)) {

            var Data = archive[key];
            // document.getElementById("baseimage").src=Data.imagesrc
            /*    if (Data.imagesrc) {
                   img = new Image();
                   img.src = Data.imagesrc
                   img.width = 100

                   img.outerHTML;
               } */
            const imageSrc = Data.imagesrc ? Data.imagesrc : "./images/avatar.jpg";


            record += '                                  <tr>\n';
            record += '                                      <td>\n';

            //record += '          <img src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"\">\n';
            record += '<img width="50" height="50"  src=' + imageSrc + ' >'


            //    if(Data.hasOwnProperty(imagesrc))
            //    {
            //     record+='<img src=' + Data.imagesrc +'>'
            //    }


            record += '                                          <a href=\"#\" class=\"user-link\">' + Data.name + '</a>\n';
            record += '                                      </td>\n';
            record += '                                      <td class=\"text-center\">\n';
            if (Data.status == true)
                record += '                                          <span class=\"label label-default\">online</span>\n';
            else
                record += '                                          <span class=\"label label-default\">offline</span>\n';
            record += '                                      </td>\n';

            record += '                                      <td style=\"width: 20%;\">\n';
            record += '                                          <a href=\"#\" data-email="' + Data.email + '" onclick="onChatButtonClick(this)" class=\"table-link\">\n';
            record += '                                              <span class=\"fa-stack\">\n';
            record += '                                                  <i class=\"fa fa-square fa-stack-2x\"></i>\n';
            record += '                                                  <i class=\"fa fa-comment fa-stack-1x fa-inverse\"></i>\n';
            record += '                                              </span>\n';
            record += '                                          </a>\n';
            record += '                                      </td>\n';
            record += '                                  </tr>\n';

        }
    }
    return record
}

/* window.onbeforeunload = closingCode;
 */
function closingCode() {
    console.log("on for unload")
    User.logout();
    return null;
}