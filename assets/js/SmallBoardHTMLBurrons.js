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
        function checkPlaceRows(val, target) {
            let start_num = target.getAttribute('data-button-count');
            let board_num = Math.floor(start_num / 9);
            let row_num = (start_num % 9);
            if (row_num == 1 || row_num == 2 || row_num == 0) {
                row_num = 0;
            }
            else if (row_num == 4 || row_num == 5 || row_num == 3) {
                row_num = 1;
            }
            else if (row_num == 7 || row_num == 8 || row_num == 6) {
                row_num = 2;
            }
            if (board_num == 0 || board_num == 1 || board_num == 2)
                start_num = 0;
            else if (board_num == 3 || board_num == 4 || board_num == 5)
                start_num = 27;
            if (board_num == 6 || board_num == 7 || board_num == 8)
                start_num = 54;
            start_num += row_num * 3;
            for (let i = +start_num; i < +start_num + 27; i += 9) {
                for (let j = i; j < i + 3; j++) {
                    const search = document.querySelector(`div[data-button-count="${j}"]`);
                    if (search.innerText === val) {
                        return true;
                    }
                }
            }
            return false;
        }
        function checkPlaceColumns(val, target) {
            let start_num = target.getAttribute('data-button-count');
            let board_num = Math.floor(start_num / 9) % 3;
            let col_num = start_num;
            while (+col_num - 9 >= 0) {
                col_num -= 9;
            }
            start_num = +board_num * 9 + col_num % 3;
            for (let i = +start_num; i < + +start_num + 81; i += 27) {
                for (let j = i; j < i + 9; j += 3) {
                    const search = document.querySelector(`div[data-button-count="${j}"]`);
                    if (search.innerText === val) {
                        return true;
                    }
                }
            }
            return false;
        }
        function checkPlaceCurrBoard(val, target) {
            const buttons = document.querySelectorAll(`div[data-board="${target.getAttribute('data-board')}"]`);
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].innerText === val)
                    return true;
            }
            return false;
        }
        if (checkPlaceRows(ele.innerText, event.target) || checkPlaceColumns(ele.innerText, event.target) || checkPlaceCurrBoard(ele.innerText, event.target)) {
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
        event.target.classList.add("drag-over");
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
