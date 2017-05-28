let moveCount = 0;
const game = {

    gameOver: false,

    toWin: [{row: ['1','2','3']},
            {row: ['4','5','6']},
            {row: ['7','8','9']},
            {row: ['1','4','7']},
            {row: ['2','5','8']},
            {row: ['3','6','9']},
            {row: ['1','5','9']},
            {row: ['3','5','7']}
    ],

    checkProgress: function(playerArray) {
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

