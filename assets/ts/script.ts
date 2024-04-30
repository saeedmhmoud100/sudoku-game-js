import BigBoard from "./BigBoard.js";
import {checkPlace} from "./Validations.js";

window.onload =async function () {
    console.log('loaded');
    const t =async ()=>{
        const board = new BigBoard();
        await board.displayBoard("main-board");
    }
    await t().then(_=>{
        for (let i = 0; i < 9; i++) {
            const times: number = 2+ Math.floor(Math.random() * 4);

            for (let j = 0; j < times; j++) {
                const board = document.getElementById('board-' + i);
                const buttons = board!.childNodes;
                const value_holders: NodeListOf<ChildNode> = board!.firstChild!.childNodes;
                let random_button = Math.floor(Math.random() * 9) + 1;
                let random_value = Math.floor(Math.random() * 9);
                let bool: boolean = ((<HTMLElement>buttons[random_button]).innerText != '' || !checkPlace((<HTMLElement>value_holders[random_value]).innerText, buttons[random_button] as HTMLElement,false));
                // while ((<HTMLElement>buttons[random_button]).innerText != '' || !checkPlace((<HTMLElement>value_holders[random_value]).innerText, buttons[random_button] as HTMLElement)) {
                //     random_button = Math.floor(Math.random() * 9) + 1;
                // }
                //
                // while ((<HTMLElement>value_holders[random_value]).innerText == '' || !checkPlace((<HTMLElement>value_holders[random_value]).innerText, buttons[random_button] as HTMLElement)) {
                //     random_value = Math.floor(Math.random() * 9);
                // }
                if(!bool){
                    (<HTMLElement>buttons[random_button]).innerText = (<HTMLElement>value_holders[random_value]).innerText;
                    (<HTMLElement>value_holders[random_value]).innerText = '';
                }else
                    j--;
            }


        }
    });


}
