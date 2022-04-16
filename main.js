var dice = document.querySelector("#dice");
var roundScore1 = document.querySelector("#totalScr1");
var roundScore2 = document.querySelector("#totalScr2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var current = document.querySelector("#P1");
var next = document.querySelector("#P2");
var player1;
var player2;
var winningScr = 50;

// Function to change the player name
function editNames() {
  player1 = prompt("Change Player1 name");

  player2 = prompt("Change player2 name");

  document.querySelector("#change1").innerHTML = player1;

  document.querySelector("#change2").innerHTML = player2;
}
var somme2 = 0;
var somme1 = 0;

function launchGame() {
  let n = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute("src", "images/" + n + ".jpg");
  if (player1 == 1) {
    current.style.backgroundColor = "#FFE5AD";
    if (
      Number(score1.innerHTML) >= winningScr ||
      Number(score2.innerHTML) >= winningScr
    ) {
      alert("GAME OVER");
    } else {
      if (n == 1) {
        let sum1 = 0;
        roundScore1.innerHTML = sum1;
        changePlayer();
      } else {
        somme1 += n;
        roundScore1.innerHTML = somme1;
      }
    }
  } else {
    if (
      Number(score1.innerHTML) >= winningScr ||
      Number(score2.innerHTML) >= winningScr
    ) {
      alert("GAME OVER");
    } else {
      if (n == 1) {
        let sum2 = 0;
        roundScore2.innerHTML = sum2;
        changePlayer();
      } else {
        somme2 += n;
        roundScore2.innerHTML = somme2;
      }
    }
  }
}
var s1, s2;
s1 = 0;
s2 = 0;
player1 = 1;
player2 = 0;
function changePlayer() {
  // roundScore1.innerHTML = "00";
  // score1.innerHTML = "salma";
  if (player1 == 1) {
    next.style.backgroundColor = "#FFE5AD";
    current.style.backgroundColor = "white";
    player1 = 0;
    player2 = 1;
    var scr1 = Number(roundScore1.innerHTML);
    score1.innerHTML = scr1;
    roundScore1.innerHTML = "00";
  } else {
    next.style.backgroundColor = "white";
    current.style.backgroundColor = "#FFE5AD";
    player1 = 1;
    player2 = 0;
    var scr2 = Number(roundScore2.innerHTML);
    score2.innerHTML = scr2;
    scr2 = 0;
    roundScore2.innerHTML = "00";
  }
  console.log("player1:" + player1);
  console.log("player2 :" + player2);
}
function initGame() {
  score1.innerHTML = 0;
  score2.innerHTML = 0;
  roundScore2.innerHTML = "00";
  roundScore1.innerHTML = "00";
  player1 = 1;
  player2 = 0;
  current.style.backgroundColor = "white";
  next.style.backgroundColor = "white";
}
