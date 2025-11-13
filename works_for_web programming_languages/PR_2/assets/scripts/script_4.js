let bet = +prompt("Ваша ставка на боксерське змагання.");
let random = Math.floor(Math.random() * 11) - 5;
setTimeout(() => {
    if (random <= 0) {
        alert("Ви програли!");
    } else {
        alert("Вітаємо! Ви виграли " + bet * random);
    }
}, 1000)