let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray() {
    for (var i = arrNum.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrNum[i];
        arrNum[i] = arrNum[j];
        arrNum[j] = temp;
    }
    updateDOM();
}

function sortArray() {
    arrNum.sort((a, b) => a - b);
    updateDOM();
}

document.addEventListener('DOMContentLoaded', (event) => {
    const sortBtn = document.getElementById('sortBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    sortBtn.addEventListener('click', sortArray);
    shuffleBtn.addEventListener('click', shuffleArray);
});

function updateDOM() {
    let elm = document.getElementsByClassName('box');
    for (let i = 0; i < elm.length; i++) {
        elm[i].innerHTML = arrNum[i];
    }
}