    var leftDice = document.getElementById("img1");
    var rightDice = document.getElementsByClassName("img2")[0];

    function random(number){
        return Math.floor(Math.random() * number)+1;

    }

    var random1 = random(6);
    var random2 = random(6);

    var src1 = leftDice.setAttribute("src",`./images/dice${random1}.png`);
    var src2 = rightDice.setAttribute("src",`./images/dice${random2}.png`);

 
    if(random1 > random2){
        document.querySelector("h1").innerHTML="🚩 Player 1 wins!!!";
    }else if(random2>random1){
        document.querySelector("h1").innerHTML="🚩 Player 2 wins!!!";
    }else{
        document.querySelector("h1").innerHTML="Draw!";
    }