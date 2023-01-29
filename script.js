// Get random numbers for images
let randNum1 = (Math.floor(Math.random()*6)) + 1;
let randNum2 = (Math.floor(Math.random()*6)) + 1; 

// Set the dices' source link to the random dice image
document.querySelector(".img1").setAttribute("src", `./images/dice${randNum1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randNum2}.png`);

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} 
else if (randNum1 < randNum2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}