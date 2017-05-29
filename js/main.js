var ticTacToe = (function main() {

//  Creates player object and arrays to track moves
    function Player(name) {
        this.name = name;
        this.isActive = false;
        this.moves = [];
    }

    let playerOne = new Player('o');
    let playerTwo = new Player('x');


//  Game logic to compare player moves to winning moves
    let moveCount = 0;
    const game = {

        gameOver: false,

        toWin: [{row: ['1', '2', '3']},
            {row: ['4', '5', '6']},
            {row: ['7', '8', '9']},
            {row: ['1', '4', '7']},
            {row: ['2', '5', '8']},
            {row: ['3', '6', '9']},
            {row: ['1', '5', '9']},
            {row: ['3', '5', '7']}
        ],

        checkProgress: function (playerArray) {
            let rowNumber = 0;
            moveCount++;
            console.log(moveCount);
            if (playerArray.length >= 3) {
                console.log(playerArray);
                while (rowNumber < this.toWin.length && this.gameOver === false) {
                    let currentRow = this.toWin[rowNumber];
                    let count = 0;
                    for (let j = 0; j < 3; j++) {
                        let square = currentRow.row[j];
                        let index = playerArray.indexOf(square);
                        if (index > -1) {
                            count++;
                        }
                        if (count === 3 || count === 3 && moveCount === 9) {
                            display.gameOver();
                            this.gameOver = true;
                        } else if (moveCount === 9) {
                            display.gameTie();
                        }
                        console.log(square, index, count);
                    }
                    rowNumber++;
                }
            }
        }
    };

//  Display object to control what part of the DOM displays
    const startScreen = document.getElementById('start');
    const board = document.getElementById('board');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const winScreen = document.getElementById('finish');
    const message = winScreen.getElementsByTagName('p')[0];

    const display = {

        startScreen: function () {
            startScreen.style.display = '';
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
            if (playerOne.isActive) {
                winScreen.classList.add('screen-win-one');
                message.innerHTML = 'O Wins!';
            } else if (playerTwo.isActive) {
                winScreen.classList.add('screen-win-two');
                message.innerHTML = 'X Wins!';
            }
        },

        gameTie: function () {
            startScreen.style.display = 'none';
            board.style.display = 'none';
            winScreen.style.display = '';
            winScreen.classList.add('screen-win-tie');
            message.innerHTML = "It's a tie!";
        },

        firstPlayer: function () {
            let randomNumber = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            if (randomNumber === 1) {
                player1.classList.add('active');
                playerOne.isActive = true;
            } else {
                player2.classList.add('active');
                playerTwo.isActive = true;
            }
        },

        switchPlayer: function () {
            if (!playerOne.isActive) {
                player1.classList.remove('active');
                player2.classList.add('active');
            } else if (!playerTwo.isActive) {
                player2.classList.remove('active');
                player1.classList.add('active');
            }
        }
    };


//  Initiates the game and controls the click and mouse event listeners
    const startButton = document.querySelector('#start .button');
    const boxes = document.querySelectorAll('.box');
    const newGameButton = document.querySelector('#finish .button');

    display.startScreen();

    startButton.addEventListener('click', () => {
        display.gameBoard();
        display.firstPlayer();
    });

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', () => {
            if (playerOne.isActive) {
                boxes[i].style.backgroundImage = "url('img/o.svg')";
            } else if (playerTwo.isActive) {
                boxes[i].style.backgroundImage = "url('img/x.svg')";
            }
        });

        boxes[i].addEventListener('mouseleave', () => {
            boxes[i].style.backgroundImage = "";
        });

        boxes[i].addEventListener('click', function event() {
            if (playerOne.isActive) {
                boxes[i].classList.add('box-filled-1');
                playerOne.moves.push(boxes[i].id);
                boxes[i].removeEventListener('click', event);
                // moveCount++;
                game.checkProgress(playerOne.moves);
                playerOne.isActive = false;
                playerTwo.isActive = true;

            } else if (playerTwo.isActive) {
                boxes[i].classList.add('box-filled-2');
                playerTwo.moves.push(boxes[i].id);
                boxes[i].removeEventListener('click', event);
                // moveCount++;
                game.checkProgress(playerTwo.moves);
                playerTwo.isActive = false;
                playerOne.isActive = true;
            }
            display.switchPlayer();
        });

    }

    newGameButton.addEventListener('click', () => {
        window.location.reload(true);
    });

}());




