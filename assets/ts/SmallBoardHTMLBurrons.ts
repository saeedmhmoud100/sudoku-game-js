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
        boardItem.id = "button-" + this.board_id.toString() + "-" + button_id.toString()

        boardItem.addEventListener('dragover', this.dragOver);
        boardItem.addEventListener('dragleave', this.dragLeave);
        boardItem.addEventListener('drop', this.drop);
        return boardItem;
    }

    drop(event: DragEvent): void {
        event.preventDefault();
        const ele = document!.getElementById(event.dataTransfer!.getData("text/plain"));

        if(ele!.getAttribute('data-board') === (<HTMLElement>event.target).getAttribute('data-board')){
            if((<HTMLElement>event.target).innerText === "") {
            (<HTMLElement>event.target).innerText = ele!.innerText;
                ele!.innerText = "";
            }else{
                const temp = (<HTMLElement>event.target).innerText;
                (<HTMLElement>event.target).innerText = ele!.innerText;

                ele!.innerText = temp;
            }
        }
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

export default SmallBoardHTMLButtons;