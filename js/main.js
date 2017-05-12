const startButton = document.querySelector('#start .button');

display.startScreen();

startButton.addEventListener('click', () => {
    display.gameBoard();
    display.firstPlayer();
});

