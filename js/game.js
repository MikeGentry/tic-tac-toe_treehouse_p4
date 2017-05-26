const game = {
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
        if (playerArray.length >= 3) {
            playerArray.sort();
            do {
                let currentRow = this.toWin[rowNumber];
                let count = 0;
                for (let j = 0; j < 3; j++) {
                    let square = currentRow.row[j];
                    let index = playerArray.indexOf(square);
                    if (index > -1) {
                        count++;
                    }
                    if (count === 3) {
                        display.gameOver();
                    }
                }
                rowNumber++;
            } while (rowNumber < this.toWin.length)
        }
    }
};

