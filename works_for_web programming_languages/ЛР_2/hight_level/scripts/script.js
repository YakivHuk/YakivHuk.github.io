const btn1 = document.getElementById('bt-1');
const btn2 = document.getElementById('bt-2');
const btn3 = document.getElementById('bt-3');

btn1.addEventListener('click', calculate);

function calculate() {
    console.log("==========Завдання №1==========");
    let result = 2;
    if (true) {
        let result = 3;
        console.log("Змінна result блочної видимості: " + result);
    }
    console.log("Змінна result, що має більш ширшу область видимості за попередника: " + result);
    console.log("========Кінець завдання========");
};

btn2.addEventListener('click', guessingNumber)

function guessingNumber() {
    const secretNumber = 4 % 10;
    let userNumber;
    while (true) {
        userNumber = prompt("Введіть ціле число від 0 до 9");
        if(userNumber >= 0 && userNumber <= 9 && userNumber % 1 == 0) {
            break;
        }
    }
    if (userNumber == secretNumber) alert("Correct!");
    else alert("Wrong!");
    console.log("=====Завдання №2 завершено=====");
}

btn3.addEventListener('click', questionToUser)

function questionToUser() {
    console.log("==========Завдання №3==========");
    let firstName = prompt("Введіть ім'я користувача");
    let firstNumeric = prompt("Введіть перше число");
    let secondNumeric = prompt("Введіть друге число");
    console.log("Hello, " + firstName + "! The sum of " + firstNumeric + " and " + secondNumeric + " is " + (+firstNumeric + +secondNumeric));
    console.log("========Кінець завдання========");
}