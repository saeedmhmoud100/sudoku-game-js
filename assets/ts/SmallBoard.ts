import SmallBoardHTML from "./SmallBoardHTML.js";


class SmallBoard {
    public board :SmallBoardHTML;

    constructor() {
        this.board = new SmallBoardHTML();
    }

    public displayBoard(id?:string): HTMLElement {
        if(id){
        document.getElementById(id)!.appendChild(this.board.get_board());
        }
        return this.board.get_board();

    }

}

export default SmallBoard;