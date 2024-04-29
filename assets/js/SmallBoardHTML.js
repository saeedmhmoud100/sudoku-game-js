import SmallBoardHTMLButtons from "./SmallBoardHTMLBurrons.js";
import SmallBoardHTMLValueHolders from "./SmallBoardHTMLValueHolders.js";
class SmallBoardHTML {
    constructor() {
        this.id = SmallBoardHTML.board_id;
        SmallBoardHTML.board_id++;
        this.buttons_data = new SmallBoardHTMLButtons(this.id);
        this.value_holders = new SmallBoardHTMLValueHolders(this.id);
    }
    reset_buttons() {
        this.buttons_data = new SmallBoardHTMLButtons(this.id);
    }
    reset_value_holders() {
        this.value_holders = new SmallBoardHTMLValueHolders(this.id);
    }
    reset_board() {
        this.reset_buttons();
        this.reset_value_holders();
    }
    get_board() {
        const board = document.createElement("div");
        board.classList.add("board");
        board.id = 'board-' + this.id.toString();
        board.append(this.value_holders.getValueHolders());
        board.append(...this.buttons_data.getButtons());
        return board;
    }
}
SmallBoardHTML.board_id = 0;
export default SmallBoardHTML;
