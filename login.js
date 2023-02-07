function getData(storageKey){
    localStorage.getItem(storageKey);
}

function validateUser(){
    var givenUserName = document.usrLogin.usr.value;
    var givenPassword = document.usrLogin.pass.value;
    var Username = "User1234";
    var Passsword = "1234";
    if((givenUserName == Username) && (givenPassword == Passsword)){
        window.location.assign("postloginhome.html");
        alert("Welcome " + Username);
        return 0;
    }else{
        alert("Invalid Username or Password");
        return 0;
    }
}

function validateAdmin(){
    var givenAdminID = document.adminLogin.admID.value;
    var givenPassword = document.adminLogin.admPass.value;
    var AdminID = "Admin";
    var Password = "Admin123";
    if((givenAdminID == AdminID) && (givenPassword == Password)){
        window.location.assign("Admin.html");
        alert("Welcome " + AdminID);
        return 0;
    }else{
        alert("Invalid AdminID or Password");
        return 0;
    }
}