var randomNumber1 = Math.random() * 6;
randomNumber1 = "images/dice"+ Math.floor(randomNumber1 + 1) + ".png";

var randomNumber2 = Math.random() * 6;
randomNumber2 = "images/dice"+ Math.floor(randomNumber2 + 1) + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomNumber1);
document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);

if (randomNumber1 > randomNumber2){
    document.querySelector(".container h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector(".container h1").textContent = "Player 2 Wins! 🚩 ";
} else {
    document.querySelector(".container h1").textContent = "Draw! ";
}