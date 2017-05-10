const startScreen = document.getElementById('start');
const board = document.getElementById('board');
const winScreen = document.getElementById('finish');

var Display = {

    startScreen: function () {
        board.style.display = 'none';
        winScreen.style.display = 'none';
    },

    gameBoard: function () {
        startScreen.style.display = 'none';
        board.style.display = '';
        winScreen.style.display = 'none';
    },

    gameOver: function () {
        startScreen.style.display = 'none';
        board.style.display = 'none';
        winScreen.style.display = '';
    }
};

