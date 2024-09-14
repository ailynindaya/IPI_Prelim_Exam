let player1Score = 0;
let player2Score = 0;
var maxScore = 3;

var choices = ['rock', 'paper', 'scissors'];

function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player1, player2) {
    if (player1 === player2) return "Draw!";
    if (
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'paper' && player2 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper')
    ) {
        player1Score++;
        return "Player 1 Wins!";
    } else {
        player2Score++;
        return "Player 2 Wins!";
    }
}

function announceFinalWinner() {
    let finalResult;
    if (player1Score === maxScore) {
        finalResult = "🥰 Player 1 is the Final Winner! 🥰";
        document.getElementById('result').style.display = 'none';

    } else if (player2Score === maxScore) {
        finalResult = "🥰 Player 2 is the Final Winner! 🥰";
        document.getElementById('result').style.display = 'none';
    }
    document.getElementById('final_result').innerText = finalResult;
    document.getElementById('play-button').disabled = true; 
}

document.getElementById('play-button').addEventListener('click', () => {
    var player1Choice = getRandomChoice();
    var player2Choice = getRandomChoice();

    document.getElementById('player1-choice').textContent = player1Choice === 'rock' ? '✊' : player1Choice === 'paper' ? '✋' : '✌️';
    document.getElementById('player2-choice').textContent = player2Choice === 'rock' ? '✊' : player2Choice === 'paper' ? '✋' : '✌️';
    
    var resultMessage = determineWinner(player1Choice, player2Choice);
    document.getElementById('result').innerText = resultMessage;

    document.getElementById('player1-score').innerText = player1Score;
    document.getElementById('player2-score').innerText = player2Score;

    // Check for a final winner
    if (player1Score === maxScore || player2Score === maxScore) {
        announceFinalWinner();
    }
        
});    