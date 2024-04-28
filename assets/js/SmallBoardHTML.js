class SmallBoardHTMLButtons {
    constructor() {
        this.buttons = [];
        for (let i = 0; i < 9; i++) {
            this.buttons[i] = this.CreateButton();
        }
    }
    CreateButton() {
        const boardItem = document.createElement("div");
        boardItem.classList.add("board-unit");
        boardItem.classList.add("board-button");
        boardItem.setAttribute("draggable", "true");
        return boardItem;
    }
    getButtons() {
        return this.buttons;
    }
}
class SmallBoardHTMLValueHolders {
    constructor() {
        this.value_holders = [];
        for (let i = 0; i < 9; i++) {
            this.value_holders[i] = this.CreateValueHolder(i + 1);
        }
    }
    CreateValueHolder(val) {
        const value_holder = document.createElement("span");
        value_holder.classList.add("value-holder");
        value_holder.innerText = val.toString();
        value_holder.setAttribute("draggable", "true");
        return value_holder;
    }
    getValueHolders() {
        const placeHoldersContainer = document.createElement("div");
        placeHoldersContainer.classList.add("selections-container");
        for (let i = 0; i < 9; i++) {
            placeHoldersContainer.append(this.value_holders[i]);
        }
        return placeHoldersContainer;
    }
}
class SmallBoardHTML {
    constructor() {
        this.buttons_data = new SmallBoardHTMLButtons();
        this.value_holders = new SmallBoardHTMLValueHolders();
    }
    reset_buttons() {
        this.buttons_data = new SmallBoardHTMLButtons();
    }
    reset_value_holders() {
        this.value_holders = new SmallBoardHTMLValueHolders();
    }
    reset_board() {
        this.reset_buttons();
        this.reset_value_holders();
    }
    get_board(i = 0) {
        const board = document.createElement("div");
        board.classList.add("board");
        board.id = 'board-' + i.toString();
        board.append(this.value_holders.getValueHolders());
        board.append(...this.buttons_data.getButtons());
        return board;
    }
}
export default SmallBoardHTML;
