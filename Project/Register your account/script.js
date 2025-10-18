const actualUser = "andreavazquez@gmail.com";
const actualPassword = "andrea123!"
var email = document.getElementById("email");
var password = document.getElementById("password");
var signIn = document.getElementById("signin");
var userEmail ;
var userPassword ;
var welcomePage = document.getElementById("welcomePage");
var mainContainer = document.getElementsByClassName("main-container")[0];
var welcomeMsg = document.getElementById("welcomeMsg");


function getInfo(){
   userEmail = email.value;
   userPassword = password.value;
   return [userEmail,userPassword];
}

function setSignin(){
var userInfo =  getInfo();
var isSuccess = check(userInfo);

if(isSuccess){
    welcomePage.classList.remove("isNotVisible");
    welcomePage.classList.add("isVisible");
    mainContainer.classList.add("isNotVisible");
    welcomeMsg.innerHTML = `Welcome ${actualUser.toUpperCase()}`;
}else{
    console.log("Email and Password not matching!")
}

}

signIn.addEventListener("click", setSignin);

function check(userInfo){
    [user,pass]=userInfo;

    if(user==actualUser&&pass==actualPassword){
        return true;
    }else{
        return false;
    }
}
