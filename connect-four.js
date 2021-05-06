import { Game } from './game.js'

let game;

function updateUI() {
    let boardHolderID = document.getElementById('board-holder')
    let gameName = document.getElementById('game-name')
    let chipOnTop = document.getElementById('click-targets')

    if (!game) {
        boardHolderID.classList.add('is-invisible')
    } else {
        boardHolderID.classList.remove('is-invisible')
        gameName.innerHTML = game.getName();
    }

    if(game.currentPlayer === 1){
        chipOnTop.classList.add('red');
        chipOnTop.classList.remove('black');
    } else {
        chipOnTop.classList.remove('red');
        chipOnTop.classList.add('black');
    }

    for (let i = 0; i < 6; i++){
        let rowIndex = i;

        for (let j = 0; j < 7; j++){
            let columnIndex = j;
            let squareSelected = document.getElementById(`square-${rowIndex}-${columnIndex}`);
            let tokenValue = game.getTokenAt(rowIndex, columnIndex)

            squareSelected.innerHTML = ''; //we left off hereeeeeeee

        }
    }

}

window.addEventListener('DOMContentLoaded', () => {

    let playerOneID = document.getElementById('player-1-name');
    let playerTwoID = document.getElementById('player-2-name');
    let newGameID = document.getElementById('new-game');
    let clickTargets = document.getElementById('click-targets');

    let checkNames = function () {
        if ((playerOneID.value.length > 0) && (playerTwoID.value.length > 0)) {
            newGameID.disabled = false;
        } else {
            newGameID.disabled = true;
        }
    }

    playerOneID.addEventListener('keyup', event => {
        checkNames();
    })

    playerTwoID.addEventListener('keyup', event => {
        checkNames();
    })

    newGameID.addEventListener('click', event => {
        game = new Game(playerOneID.value, playerTwoID.value)
        playerOneID.value = '';
        playerTwoID.value = '';
        checkNames();
        updateUI();
    })

    clickTargets.addEventListener('click', event => {
        let elementID = event.target.id;
        let circlePosition;
        if (elementID.includes('column')){
        circlePosition = Number(elementID[elementID.length-1])
        } else {
            return
        }
        game.playInColumn(circlePosition);
        updateUI();
    })
})
