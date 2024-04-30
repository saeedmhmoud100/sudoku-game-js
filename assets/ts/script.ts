import BigBoard from "./BigBoard.js";
import {checkPlace} from "./Validations.js";

window.onload =function () {
    console.log('loaded');
    const board = new BigBoard();
    board.displayBoard("main-board");



}
