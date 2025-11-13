const chas = document.getElementById("chas");

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
    alert("Час на вебсторінці оновлено!")
    setTimeout('time()', 30000);
}

time();