const input = document.getElementById("input");
const enter = document.getElementById("enter");

enter.addEventListener("click", () => {
    if (document.querySelector("ul")) {
        document.body.removeChild(document.querySelector("ul"));
    }
    let contries = []
    const ul = document.createElement("ul");
    contries = input.value.split(",");
    contries.forEach(contry => {
        ul.innerHTML += `<li>${contry}</li>`
    });
    document.body.appendChild(ul);
})