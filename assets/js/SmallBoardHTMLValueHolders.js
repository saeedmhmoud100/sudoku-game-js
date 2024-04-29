class SmallBoardHTMLValueHolders {
    constructor(board_id) {
        this.value_holders = [];
        this.board_id = board_id;
        for (let i = 0; i < 9; i++) {
            this.value_holders[i] = this.CreateValueHolder(i);
        }
    }
    dragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        // SmallBoardHTMLValueHolders.draggedValue = parseInt((<HTMLElement>event.target).innerText);
    }
    CreateValueHolder(val) {
        const value_holder = document.createElement("span");
        value_holder.classList.add("value-holder");
        value_holder.innerText = (val + 1).toString();
        value_holder.id = "value-holder-" + this.board_id.toString() + "-" + val.toString();
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
export default SmallBoardHTMLValueHolders;
