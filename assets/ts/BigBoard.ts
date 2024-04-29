import SmallBoard from "./SmallBoard.js";


class BigBoard{
    private board :SmallBoard[];

    constructor() {
        this.board = [];
        for (let i = 0; i < 9; i++) {
            this.board.push(new SmallBoard());
        }
    }

    displayBoard(id="board"): void {
        for (let i = 0; i < 9; i++) {
            document.getElementById(id)!.appendChild(this.board[i].displayBoard());
        }
    }
}

export default BigBoard;