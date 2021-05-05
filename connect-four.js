import { Game } from './game.js'

let game;

function updateUI() {
    let boardHolderID = document.getElementById('board-holder')
    let gameName = document.getElementById('game-name')
    if (!game) {
        boardHolderID.classList.add('is-invisible')
    } else {
        boardHolderID.classList.remove('is-invisible')
        gameName.innerHTML = game.getName();
    }
}

window.addEventListener('DOMContentLoaded', () => {

    let playerOneID = document.getElementById('player-1-name');
    let playerTwoID = document.getElementById('player-2-name');
    let newGameID = document.getElementById('new-game');
    let targets = document.getElementById('click-targets');

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
})
