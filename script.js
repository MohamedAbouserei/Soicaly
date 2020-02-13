class User {
    constructor(name, DOB, email, password, status, id) {
        this.name = name;
        this.DOB = DOB;
        this.email = email;
        this.password = password;
        this.status = status;
    }
    static storeObjectllo = function (userObject) {
        if (!this.id) {
            var lastInsertedId = JSON.parse(localStorage.getItem("lastInsertedId"));
            lastInsertedId = lastInsertedId ? lastInsertedId : 0;
            userObject.id = ++lastInsertedId;
        }

        localStorage.setItem("lastInsertedId", lastInsertedId);
        localStorage.setItem(userObject.email, JSON.stringify(userObject));
    }
    static getAllObjects = function () {
        var archive = {}, // Notice change here
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            archive[keys[i]] = localStorage.getItem(keys[i]);
        }
        return archive;
    }
    static getObjectbyEmail = function (email) {

        var archive = localStorage.getItem(email);
        console.log(email);
        return archive;
    }
    static getAllPosts = function () {
        var archive = new Array();
        // Notice change here
        var keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {

            if (!keys[i].indexOf('@') > -1)
                archive[keys[i]] = localStorage.getItem(keys[i]);
        }
        return archive;
    }
}