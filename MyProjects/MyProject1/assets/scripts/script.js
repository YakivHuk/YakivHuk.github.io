const secondArrow = document.getElementById("secondArrow");
const minuteArrow = document.getElementById("minuteArrow");
const hourArrow = document.getElementById("hourArrow");

function tick() {
    let time = new Date();
    secondArrow.style.transform = `rotate(${6 * time.getSeconds()}deg)`;
    minuteArrow.style.transform = `rotate(${6 * time.getMinutes()}deg)`;
    hourArrow.style.transform = `rotate(${30 * (time.getHours() % 12)}deg)`;
}

tick();
setInterval(tick, 1000);