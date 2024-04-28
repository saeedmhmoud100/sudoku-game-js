import SmallBoardHTML from "./SmallBoardHTML.js";
class SmallBoard {
    constructor() {
        this.board = new SmallBoardHTML();
    }
    displayBoard(id = "board") {
        document.getElementById(id).appendChild(this.board.get_board());
    }
}
export default SmallBoard;
