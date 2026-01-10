const secondArrow = document.getElementById("secondArrow");
const minuteArrow = document.getElementById("minuteArrow");
const hourArrow = document.getElementById("hourArrow");

function tick() {
    let time = new Date();
    if (secondArrow.style.transform == '') {
        secondArrow.style.transform = `rotate(${6 * time.getSeconds()}deg)`;
    } else if (time.getSeconds() !== 0) {
        secondArrow.style.transition = "transform .5s cubic-bezier(.18,.89,.32,1.28)"
        secondArrow.style.transform = `rotate(${6 * time.getSeconds()}deg)`;
    } else {
        secondArrow.style.transform = "rotate(360deg)";
        setTimeout(() => {
            secondArrow.style.transition = "none"
            secondArrow.style.transform = `rotate(${6 * time.getSeconds()}deg)`;
        }, 500);
    }

    minuteArrow.style.transform = `rotate(${0.1 * (time.getMinutes() * 60 + time.getSeconds())}deg)`;
    hourArrow.style.transform = `rotate(${360 / 43200 * ((time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()) % 43200)}deg)`;
}

tick();
setInterval(tick, 1000);