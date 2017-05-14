const startButton = document.querySelector('#start .button');
const boxes = document.querySelectorAll('.box');

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
}


