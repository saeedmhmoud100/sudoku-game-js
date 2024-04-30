function wrongButton(target) {
    var ourAudio = document.createElement('audio'); // Create a audio element using the DOM
    ourAudio.style.display = "none"; // Hide the audio element
    ourAudio.src = "/assets/sounds/wrong-sound.mp3"; // Set resource to our URL
    ourAudio.autoplay = true; // Automatically play sound
    ourAudio.onended = function () {
        ourAudio.remove(); // Remove when played.
    };
    document.body.appendChild(ourAudio);
    target.classList.add("wrong");
    setTimeout(() => {
        target.classList.remove("wrong");
    }, 1000);
}
function checkPlaceRows(val, target, wrong = true) {
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
                wrongButton(search);
                return false;
            }
        }
    }
    return true;
}
function checkPlaceColumns(val, target, wrong = true) {
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
                if (wrong)
                    wrongButton(search);
                return false;
            }
        }
    }
    return true;
}
function checkPlaceCurrBoard(val, target, wrong = true) {
    const buttons = document.querySelectorAll(`div[data-board="${target.getAttribute('data-board')}"]`);
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].innerText === val) {
            if (wrong)
                wrongButton(buttons[i]);
            return false;
        }
    }
    return true;
}
function checkPlace(val, target, wrong = true) {
    return checkPlaceRows(val, target, wrong) && checkPlaceColumns(val, target, wrong) && checkPlaceCurrBoard(val, target, wrong);
}
export { checkPlace };
