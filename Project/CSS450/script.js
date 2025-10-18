var searchBox = document.getElementsByClassName("searchBox")[0];

var googleLink = document.getElementsByTagName("a")[0];
var amazonLinks = document.getElementsByTagName("a")[1];
var ebayLinks = document.getElementsByTagName("a")[2];

var likedIcon = document.getElementsByTagName("button")[0];
var cartIcon = document.getElementsByTagName("button")[1];
var notificationsIcon = document.getElementsByTagName("button")[2];

likedIcon.classList.add("test");
    
searchBox.onchange = changeText;

function changeText(){
    document.getElementById("output").innerHTML = searchBox.value;
    console.log(searchBox.value);
}








