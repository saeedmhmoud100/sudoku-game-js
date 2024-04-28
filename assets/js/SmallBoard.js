import SmallBoardHTML from "./SmallBoardHTML.js";
class SmallBoard {
    constructor() {
        this.board = new SmallBoardHTML();
    }
    displayBoard(id) {
        if (id) {
            document.getElementById(id).appendChild(this.board.get_board());
        }
        return this.board.get_board();
    }
}
export default SmallBoard;
