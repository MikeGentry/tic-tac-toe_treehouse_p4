const startScreen = document.getElementById('start');
const board = document.getElementById('board');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const winScreen = document.getElementById('finish');
const message = winScreen.getElementsByTagName('p')[0];

const display = {

    startScreen: function() {
        startScreen.style.display = '';
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
        if (playerOne.isActive) {
            winScreen.classList.add('screen-win-one');
            message.innerHTML = 'O Wins!';
        } else if (playerTwo.isActive) {
            winScreen.classList.add('screen-win-two');
            message.innerHTML = 'X Wins!';
        }
    },

    gameTie: function() {
        startScreen.style.display = 'none';
        board.style.display = 'none';
        winScreen.style.display = '';
        winScreen.classList.add('screen-win-tie');
        message.innerHTML = "It's a tie!";
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

    switchPlayer: function() {
        if (!playerOne.isActive) {
            player1.classList.remove('active');
            player2.classList.add('active');
        } else if (!playerTwo.isActive) {
            player2.classList.remove('active');
            player1.classList.add('active');
        }
    }
};

