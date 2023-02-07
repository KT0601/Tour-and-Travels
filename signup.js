function storeData(storageKey, val1){
    localStorage.setItem(storageKey, val1);
}

function register(){
    var userName = document.signUP.name.value;
    var password = document.signUP.pass1.value;
    var confirmPass = document.signUP.pass2.value;

    if(password == confirmPass){
        storeData(ValidUserName, userName);
        storeData(ValidPassword, password)
        window.location.assign("login.html");
        alert("Registration Successful.");
    }else{
        alert("Password and confirm password should be equal.")
    }
}