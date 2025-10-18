var openTitle = document.getElementById("result");
var lightOn = document.getElementById("onOffBtn");
var btnOn = document.getElementById("myButton");
//var btnOff = document.getElementById("clickButton");
var isOn = false;

document.getElementById("myButton").onclick = function(){
    if(isOn){
    //openTitle.innerHTML = "On"
    lightOn.setAttribute("src", "On-lightbulb.png")
    btnOn.classList.add("pressed");
    btnOn.classList.add("up");
    isOn=false;
    //btnOn.innerHTML = "On"
    }else{
    //btnOn.innerHTML = "Off"
    //openTitle.innerHTML = "Off"
    lightOn.setAttribute("src", "Off-lightbulb.png")
    btnOn.classList.remove("pressed");
    btnOn.classList.remove("up");
    isOn=true;
    }

    btnOn.innerHTML = isOn ? "Off" : "On";
}

var close = document.getElementById("close");
var text = document.getElementById("text");
var HideAndSike = false;

// close.onclick = function(){
//     if(HideAndSike){
//         HideAndSike = false;
//         text.classList.remove("hideText");
//         close.classList.add("showingText");
//         close.classList.remove("hidingText");
//     }else{
//         HideAndSike = true;
//         text.classList.add("hideText");
//         close.classList.add("hidingText");
//         close.classList.remove("showingText");
//     }

//     close.innerHTML = HideAndSike ? "Text is hidden" : "Text is showing";

// }

close.onmouseover = function(){
        HideAndSike = false;
        text.classList.remove("hideText");
        close.classList.add("showingText");
        close.classList.remove("hidingText");
}



close.onmouseout = function(){
        HideAndSike = true;
        text.classList.add("hideText");
        close.classList.add("hidingText");
        close.classList.remove("showingText");
    
}



    


// document.getElementById("clickButton").addEventListener("click",function(){
//     //alert("I got clicked");
//     openTitle.innerHTML = "Off"
//     lightOn.setAttribute("src", "Off-lightbulb.png")
//     btnOff.classList.add("pressed");
//     btnOn.classList.remove("pressed");

// });



