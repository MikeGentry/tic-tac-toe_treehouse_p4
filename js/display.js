const startScreen = document.getElementById('start');
const board = document.getElementById('board');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const winScreen = document.getElementById('finish');


const display = {

    startScreen: function() {
        board.style.display = 'none';
        winScreen.style.display = 'none';
    },

    gameBoard: function() {
        startScreen.style.display = 'none';
        board.style.display = '';
        winScreen.style.display = 'none';
    },

    gameOver: function() {
        startScreen.style.display = 'none';
        board.style.display = 'none';
        winScreen.style.display = '';
    },

    firstPlayer: function() {
        let randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        if (randomNumber === 1) {
            player1.classList.add('active');
            playerOne.isActive = true;
        } else {
            player2.classList.add('active');
            playerTwo.isActive = true;
        }
    },




};

