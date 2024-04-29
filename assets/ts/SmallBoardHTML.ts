import SmallBoard from "./SmallBoard";


class SmallBoardHTMLButtons{
    buttons: HTMLDivElement[];
    public board_id: number;
    constructor(board_id:number){
        this.board_id = board_id;


        this.buttons = [];
        for(let i = 0; i < 9; i++) {
            this.buttons[i] = this.CreateButton(i);
        }

    }

    private CreateButton(button_id:number): HTMLDivElement {
        const boardItem: HTMLDivElement = document.createElement("div");
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

    drop(event: DragEvent): void {
        event.preventDefault();
        const ele = event.dataTransfer!.getData("text/plain");
            (<HTMLElement>event.target).innerText = ele;
            (<HTMLElement>event.target)!.classList.remove("drag-over");
    }


    dragOver(event: DragEvent): void {
        event.preventDefault();
        (<HTMLElement>event.target)!.classList.add("drag-over");
    }

    dragLeave(event: DragEvent): void {
        (<HTMLElement>event.target)!.classList.remove("drag-over");
    }

    public getButtons(): HTMLDivElement[] {
        return this.buttons;
    }

}


class SmallBoardHTMLValueHolders {
    value_holders: HTMLSpanElement[];
    public board_id: number;
    constructor(board_id:number) {
        this.value_holders = [];
        this.board_id = board_id;
        for (let i = 0; i < 9; i++) {
            this.value_holders[i] = this.CreateValueHolder(i);
        }


    }

    dragStart(event: DragEvent): void {
        event.dataTransfer!.setData('text/plain', (<HTMLElement>event.target).innerText);

        // SmallBoardHTMLValueHolders.draggedValue = parseInt((<HTMLElement>event.target).innerText);
    }


    private CreateValueHolder(val:number): HTMLSpanElement {
        const value_holder: HTMLSpanElement = document.createElement("span");
        value_holder.classList.add("value-holder");
        value_holder.innerText = (val+1).toString();

        value_holder.setAttribute('data-board', this.board_id.toString());
        value_holder.setAttribute('data-value', val.toString());

        value_holder.setAttribute("draggable", "true")

        value_holder.ondragstart =this.dragStart;

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