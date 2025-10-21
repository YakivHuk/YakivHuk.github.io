function* passwordGenerator() {
    let password = "";
    while (true) {
        let symbol;
        symbol = yield "Введіть символ для створення пароля, щоб отримати пароль напишіть 'done'.";
        if (symbol.includes('done')) {
            alert("Згенерований пароль: " + password);
        } else password += symbol;
    }
}

const password = passwordGenerator();
let eneteredValue = prompt(password.next().value);

while(true) {
    eneteredValue = prompt(password.next(eneteredValue).value)
    if(eneteredValue == 'done') break;
}
password.next(eneteredValue)