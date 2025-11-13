const chas = document.getElementById("chas");
const button = document.getElementById("timeUpdateButton");

function addingZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
}

function time() {
    let time = new Date();
    chas.value = addingZero(time.getHours()) + ":" + addingZero(time.getMinutes()) + ":" + addingZero(time.getSeconds());
}

document.addEventListener("DOMContentLoaded", time);
button.addEventListener("click", time);