import SmallBoardHTMLButtons from "./SmallBoardHTMLButtons.js";
import SmallBoardHTMLValueHolders from "./SmallBoardHTMLValueHolders.js";

class SmallBoardHTML {
    buttons_data: SmallBoardHTMLButtons;
    value_holders: SmallBoardHTMLValueHolders;
    static board_id: number;
    id: number;

    constructor() {
        this.id = SmallBoardHTML.board_id;
        SmallBoardHTML.board_id++;
        this.buttons_data = new SmallBoardHTMLButtons(this.id);
        this.value_holders = new SmallBoardHTMLValueHolders(this.id);
    }

    public reset_buttons(): void {
        this.buttons_data = new SmallBoardHTMLButtons(this.id);
    }

    public reset_value_holders(): void {
        this.value_holders = new SmallBoardHTMLValueHolders(this.id);
    }

    public reset_board(): void {
        this.reset_buttons();
        this.reset_value_holders();
    }

    public get_board(): HTMLDivElement {
        const board: HTMLDivElement = document.createElement("div");
        board.classList.add("board");
        board.id = 'board-'+this.id.toString();
        board.append(this.value_holders.getValueHolders());
        board.append(...this.buttons_data.getButtons());
        return board;
    }

}

SmallBoardHTML.board_id = 0;
export default SmallBoardHTML;