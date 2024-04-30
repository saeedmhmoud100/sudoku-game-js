import { checkPlace } from "./Validations.js";
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
        boardItem.id = "button-" + this.board_id.toString() + "-" + button_id.toString();
        boardItem.setAttribute("data-button-count", SmallBoardHTMLButtons.button_count.toString());
        SmallBoardHTMLButtons.button_count++;
        boardItem.addEventListener('dragover', this.dragOver);
        boardItem.addEventListener('dragleave', this.dragLeave);
        boardItem.addEventListener('drop', this.drop);
        return boardItem;
    }
    drop(event) {
        event.preventDefault();
        const ele = document.getElementById(event.dataTransfer.getData("text/plain"));
        if (!checkPlace(ele.innerText, event.target)) {
            event.target.classList.add("drag-over");
            return;
        }
        if (ele.getAttribute('data-board') === event.target.getAttribute('data-board')) {
            if (event.target.innerText === "") {
                event.target.innerText = ele.innerText;
                ele.innerText = "";
            }
            else {
                const temp = event.target.innerText;
                event.target.innerText = ele.innerText;
                ele.innerText = temp;
            }
        }
        event.target.classList.remove("drag-over");
    }
    dragOver(event) {
        event.preventDefault();
        if (event.target.innerText === "") {
            event.target.classList.add("drag-over");
        }
    }
    dragLeave(event) {
        event.target.classList.remove("drag-over");
    }
    getButtons() {
        return this.buttons;
    }
}
SmallBoardHTMLButtons.button_count = 0;
export default SmallBoardHTMLButtons;
