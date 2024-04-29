class SmallBoardHTMLButtons {
    constructor(board_id) {
        this.board_id = board_id;
        this.buttons = [];
        for (let i = 0; i < 9; i++) {
            this.buttons[i] = this.CreateButton(i);
        }
    }
    CreateButton(button_id) {
        const boardItem = document.createElement("div");
        boardItem.classList.add("board-unit");
        boardItem.classList.add("board-button");
        boardItem.setAttribute('data-board', this.board_id.toString());
        boardItem.setAttribute('data-button', button_id.toString());
        boardItem.id = "button-";
        boardItem.setAttribute("draggable", "true");
        boardItem.addEventListener('dragover', this.dragOver);
        boardItem.addEventListener('dragleave', this.dragLeave);
        boardItem.addEventListener('drop', this.drop);
        return boardItem;
    }
    drop(event) {
        event.preventDefault();
        const ele = event.dataTransfer.getData("text/plain");
        event.target.innerText = ele;
        event.target.classList.remove("drag-over");
    }
    dragOver(event) {
        event.preventDefault();
        event.target.classList.add("drag-over");
    }
    dragLeave(event) {
        event.target.classList.remove("drag-over");
    }
    getButtons() {
        return this.buttons;
    }
}
class SmallBoardHTMLValueHolders {
    constructor(board_id) {
        this.value_holders = [];
        this.board_id = board_id;
        for (let i = 0; i < 9; i++) {
            this.value_holders[i] = this.CreateValueHolder(i);
        }
    }
    dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.innerText);
        // SmallBoardHTMLValueHolders.draggedValue = parseInt((<HTMLElement>event.target).innerText);
    }
    CreateValueHolder(val) {
        const value_holder = document.createElement("span");
        value_holder.classList.add("value-holder");
        value_holder.innerText = (val + 1).toString();
        value_holder.setAttribute('data-board', this.board_id.toString());
        value_holder.setAttribute('data-value', val.toString());
        value_holder.setAttribute("draggable", "true");
        value_holder.ondragstart = this.dragStart;
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
