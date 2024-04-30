import BigBoard from "./BigBoard.js";
window.onload = function () {
    console.log('loaded');
    const board = new BigBoard();
    board.displayBoard("main-board");
};
