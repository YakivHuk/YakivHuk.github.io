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

const clockface = document.getElementById("clockface")
const light = document.getElementById("light");

function moveLight(e) {
    light.style.top = e.clientY - 25 + "px";
    light.style.left = e.clientX - 25 + "px";
    if (e.clientY < window.innerHeight / 2) {
        clockface.style.backgroundImage = `linear-gradient(${(Math.atan((window.innerWidth / 2 - e.clientX) / (window.innerHeight / 2 - e.clientY)) / Math.PI) * -180}deg, transparent 50%, yellow 100%)`;
    } else if (e.clientY > window.innerHeight / 2) {
        clockface.style.backgroundImage = `linear-gradient(${((Math.PI / 2 - Math.atan((window.innerWidth / 2 - e.clientX) / (window.innerHeight / 2 - e.clientY))) / Math.PI) * 180 + 90}deg, transparent 50%, yellow 100%)`;
    }
    console.log(e.clientY);
}

let selected = false;

light.addEventListener("click", () => {
    if (selected == false) {
        window.addEventListener("mousemove", moveLight);
        selected = true;
    } else if (selected == true) {
        window.removeEventListener("mousemove", moveLight);
        selected = false;
    }
})