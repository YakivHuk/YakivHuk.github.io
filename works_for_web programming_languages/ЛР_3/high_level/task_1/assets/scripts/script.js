const button = document.getElementById('next');
const output = document.getElementById('out');

function* randomGenerator(min, max) {
    while(true) {
        yield Math.floor(Math.random() * (max - min + 1)) + +min;
    }
}

let min = prompt('Введіть мінімальне значення випадкових чисел для діапазону!');
let max = prompt('Введіть максимальне значення випадкових чисел для діапазону!');
let random = randomGenerator(min, max);
button.addEventListener('click', () => {
    output.style.borderWidth = '2px'
    output.textContent = random.next().value;
    output.classList.remove('shake-animation');
    setTimeout(() => {output.classList.add('shake-animation')});
});