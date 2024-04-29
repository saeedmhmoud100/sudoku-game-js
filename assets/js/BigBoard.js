import SmallBoard from "./SmallBoard.js";
class BigBoard {
    constructor() {
        this.board = [];
        for (let i = 0; i < 9; i++) {
            this.board.push(new SmallBoard());
        }
    }
    displayBoard(id = "board") {
        for (let i = 0; i < 9; i++) {
            document.getElementById(id).appendChild(this.board[i].displayBoard());
        }
    }
}
export default BigBoard;
