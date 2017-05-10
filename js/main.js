const startButton = document.querySelector('#start .button');

Display.startScreen();

startButton.addEventListener('click', () => {
    Display.gameBoard();
});

