const hello = document.getElementById('hello');

const userName = prompt("Як вас звати")

const user = {
    name: userName,
    say() {alert(`Hello, ${this.name}`);}
}

const sayName = user.say.bind(user);

hello.addEventListener('click', sayName)