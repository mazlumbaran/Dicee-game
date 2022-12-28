
var randomNumber1 = Math.floor(6*(Math.random())+1);
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage );   

var randomNumber2 = Math.floor(6*(Math.random())+1);
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2 );   

if (randomNumber1>randomNumber2) {

    document.querySelector("h1").innerHTML="&#128081;Player 1 Wins";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins&#128081;";
}

else {
    document.querySelector("h1").innerHTML="Draw!";
}