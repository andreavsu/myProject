var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];



function nextSwquence(){
    var randomNumber = Math.floor(Math.random()*3)+1;

    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);



}

