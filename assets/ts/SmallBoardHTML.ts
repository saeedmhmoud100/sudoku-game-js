

class SmallBoardHTMLButtons{
    buttons: HTMLDivElement[];
    constructor() {
        this.buttons = [];
        for(let i = 0; i < 9; i++) {
            this.buttons[i] = this.CreateButton();
        }
    }

    private CreateButton(): HTMLDivElement {
        const boardItem: HTMLDivElement = document.createElement("div");
        boardItem.classList.add("board-unit");
        boardItem.classList.add("board-button");
        boardItem.setAttribute("draggable", "true");

        return boardItem;
    }

    public getButtons(): HTMLDivElement[] {
        return this.buttons;
    }

}


class SmallBoardHTMLValueHolders {
    value_holders: HTMLSpanElement[];
    constructor() {
        this.value_holders = [];

        for (let i = 0; i < 9; i++) {
            this.value_holders[i] = this.CreateValueHolder(i+1);
        }
    }

    private CreateValueHolder(val:number): HTMLSpanElement {
        const value_holder: HTMLSpanElement = document.createElement("span");
        value_holder.classList.add("value-holder");
        value_holder.innerText = val.toString();
        value_holder.setAttribute("draggable", "true")
        return value_holder;
    }

    public getValueHolders(): HTMLDivElement {
        const placeHoldersContainer: HTMLDivElement = document.createElement("div");
        placeHoldersContainer.classList.add("selections-container");

        for (let i = 0; i < 9; i++) {
            placeHoldersContainer.append(this.value_holders[i]);
        }
        return placeHoldersContainer;
    }

}


class SmallBoardHTML {
    buttons_data: SmallBoardHTMLButtons;
    value_holders: SmallBoardHTMLValueHolders;

    constructor() {
        this.buttons_data = new SmallBoardHTMLButtons();
        this.value_holders = new SmallBoardHTMLValueHolders();
    }

    public reset_buttons(): void {
        this.buttons_data = new SmallBoardHTMLButtons();
    }

    public reset_value_holders(): void {
        this.value_holders = new SmallBoardHTMLValueHolders();
    }

    public reset_board(): void {
        this.reset_buttons();
        this.reset_value_holders();
    }

    public get_board(i:number =0): HTMLDivElement {
        const board: HTMLDivElement = document.createElement("div");
        board.classList.add("board");
        board.id = 'board-'+i.toString();
        board.append(this.value_holders.getValueHolders());
        board.append(...this.buttons_data.getButtons());
        return board;
    }

}

export default SmallBoardHTML;