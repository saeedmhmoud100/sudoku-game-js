import SmallBoardHTML from "./SmallBoardHTML.js";


class SmallBoard {
    private board :SmallBoardHTML;

    constructor() {
        this.board = new SmallBoardHTML();
    }

    public displayBoard(id="board"): void {
        document.getElementById(id)!.appendChild(this.board.get_board());

    }
}

export default SmallBoard;