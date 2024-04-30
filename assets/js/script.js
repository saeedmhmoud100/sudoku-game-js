var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import BigBoard from "./BigBoard.js";
import { checkPlace } from "./Validations.js";
window.onload = function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('loaded');
        const t = () => __awaiter(this, void 0, void 0, function* () {
            const board = new BigBoard();
            yield board.displayBoard("main-board");
        });
        yield t().then(_ => {
            for (let i = 0; i < 9; i++) {
                const times = 2 + Math.floor(Math.random() * 4);
                for (let j = 0; j < times; j++) {
                    const board = document.getElementById('board-' + i);
                    const buttons = board.childNodes;
                    const value_holders = board.firstChild.childNodes;
                    let random_button = Math.floor(Math.random() * 9) + 1;
                    let random_value = Math.floor(Math.random() * 9);
                    let bool = (buttons[random_button].innerText != '' || !checkPlace(value_holders[random_value].innerText, buttons[random_button], false));
                    // while ((<HTMLElement>buttons[random_button]).innerText != '' || !checkPlace((<HTMLElement>value_holders[random_value]).innerText, buttons[random_button] as HTMLElement)) {
                    //     random_button = Math.floor(Math.random() * 9) + 1;
                    // }
                    //
                    // while ((<HTMLElement>value_holders[random_value]).innerText == '' || !checkPlace((<HTMLElement>value_holders[random_value]).innerText, buttons[random_button] as HTMLElement)) {
                    //     random_value = Math.floor(Math.random() * 9);
                    // }
                    if (!bool) {
                        buttons[random_button].innerText = value_holders[random_value].innerText;
                        value_holders[random_value].innerText = '';
                    }
                    else
                        j--;
                }
            }
        });
    });
};
