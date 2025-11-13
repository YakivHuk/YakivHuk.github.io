const textContainer = document.getElementById("textContainer");
const output = document.getElementById("output")

let text = prompt("Введіть текст для ефекту друкарської машинки!").split("");
let i = 0;

setInterval(function type() {
    if (i < text.length) {
        textContainer.textContent += text[i++];
    } else {
        setTimeout(() => {output.classList.add("ready");}, 500);
    };
}, 500)

/*
// Варіант із вкладаним планувальником setTimeout
setTimeout(function type() {
    if (i < text.length) {
        textContainer.textContent += text[i++];
        setTimeout(type, 500)
    } else {
        output.classList.add("ready");
    };
}, 500)
*/