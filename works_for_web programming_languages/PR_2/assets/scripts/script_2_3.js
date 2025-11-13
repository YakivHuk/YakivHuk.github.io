const chas = document.getElementById("chas");
let seconds = 0;
let minutes = 0;
let hours = 0;

function addingZero(number) {
    if (number < 10) {
        return "0" + number;
    }
    else {
        return number;
    }
}

function time() {
    if (hours == 24) {
        minutes = 0;
        seconds = 0;
        hours = 0;
    } else if (minutes == 60) {
        minutes = 0;
        seconds = 0;
        ++hours;
    } else if (seconds == 60) {
        seconds = 0;
        ++minutes;
    }
    chas.value = (hours == 0 ? "" : (addingZero(hours) + ":")) + (minutes == 0 ? "" : (addingZero(minutes) + ":")) + addingZero(seconds++);
    setTimeout('time()', 1000);
}

time();