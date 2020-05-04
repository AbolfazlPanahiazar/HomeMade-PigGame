/***********************
 * Pig Game
*/

let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let diceNumber;

// Hide the dice square in the first place.
document.getElementById('dice').style.display = 'none';

// Set values to zero in the first place
document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

// Roll the dice button
document.querySelector('.btn-roll').addEventListener('click', () => {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    let diceObj = document.getElementById('dice');
    diceObj.style.display = 'block';
    diceObj.src = `./images/dice-${diceNumber}.png`; 
    if (diceNumber !== 1) {
        roundScore += diceNumber;
        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {
        roundScore = 0;
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent = '0'
        document.getElementById('current-1').textContent = '0'
        document.querySelector(`.player-0-panel`).classList.toggle('active');
        document.querySelector(`.player-1-panel`).classList.toggle('active');
        document.getElementById('dice').style.display = 'none';
    }
});