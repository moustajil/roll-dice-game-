"use strict"

// background-color: rgba(233, 229, 223, 0.56);

const activeColor = 'rgba(233, 229, 223, 0.56)';
const noActiveColor = 'rgba(233, 229, 223, 0)';


let activePlayer = 1

const palaye1 = document.querySelector(".player1")
const palaye2 = document.querySelector(".player2")

const pointPlayer1 = document.querySelector(".point1")
const pointPlayer2 = document.querySelector(".point2")

const rollDicePointPlayer1 = document.querySelector(".rollDicePoint1")
const rollDicePointPlayer2 = document.querySelector(".rollDicePoint2")

const buttonNewGame = document.querySelector(".newGameBtn")
const buttonPlay = document.querySelector(".rollDiceBtn")
const holdButton = document.querySelector(".holdBtn")

const rollDicePoints = document.querySelector(".randomPointRollDice")


buttonPlay.addEventListener("click", function () {
    const rollDiceNumber = Math.floor(Math.random() * 6) + 1;
    rollDicePoints.textContent = rollDiceNumber;

    if (activePlayer === 1) {
        if (rollDiceNumber === 1) {
            rollDicePoints.textContent = 0;
            palaye1.style.backgroundColor = noActiveColor;
            rollDicePointPlayer1.textContent = 0
            palaye2.style.backgroundColor = activeColor;
            activePlayer = 2;
        } else {
            rollDicePointPlayer1.textContent =
                Number(rollDicePointPlayer1.textContent) + rollDiceNumber;
        }
    } else {
        if (rollDiceNumber === 1) {
            rollDicePoints.textContent = 0;
            palaye2.style.backgroundColor = noActiveColor;
            palaye1.style.backgroundColor = activeColor;
             rollDicePointPlayer2.textContent = 0
            activePlayer = 1;
        } else {
            rollDicePointPlayer2.textContent =
                Number(rollDicePointPlayer2.textContent) + rollDiceNumber;
        }
    }
});

holdButton.addEventListener("click",function () {
    if (activePlayer === 1) {
        palaye1.style.backgroundColor = noActiveColor;
        palaye2.style.backgroundColor = activeColor;
        activePlayer = 2
        let sumPoints = 0
        sumPoints = Number(rollDicePointPlayer1.textContent) + Number(pointPlayer1.textContent)
        pointPlayer1.textContent = sumPoints
        rollDicePoints.textContent = 0
        rollDicePointPlayer1.textContent = 0
    }else{
        activePlayer = 1
        let sumPoints = 0
        sumPoints = Number(rollDicePointPlayer2.textContent) + Number(pointPlayer2.textContent)
        pointPlayer2.textContent = sumPoints
        rollDicePoints.textContent = 0
        rollDicePointPlayer2.textContent = 0
        palaye2.style.backgroundColor = noActiveColor;
        palaye1.style.backgroundColor = activeColor;

    }
})



buttonNewGame.addEventListener("click",function(){
    const initialNumber = 0;
    pointPlayer1.textContent = initialNumber
    pointPlayer2.textContent = initialNumber

    rollDicePointPlayer1.textContent = initialNumber
    rollDicePointPlayer2.textContent = initialNumber

    rollDicePoints.textContent = initialNumber
    activePlayer = 1
})
