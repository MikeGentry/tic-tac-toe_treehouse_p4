function Player(name) {
    this.name = name;
    this.isActive = false;
    this.moves = [];
}

let playerOne = new Player('o');
let playerTwo = new Player('x');