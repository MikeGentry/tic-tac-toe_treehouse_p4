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






