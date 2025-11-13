document.write("<p><strong>Завдання №1</strong></p>");
const date1 = new Date(2021, 1, 20, 3, 12);
const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
}
document.write(`<p>${date1.toLocaleString("uk-UK", options)}</p>`);

document.write("<p><strong>Завдання №2</strong></p>");
function getWeekDay(date) {
    switch(date.getDay()) {
        case 0:
            return "НД";
            break;
        case 1:
            return "ПН";
            break;
        case 2:
            return "ВТ";
            break;
        case 3:
            return "СР";
            break;
        case 4:
            return "ЧТ";
            break;
        case 5:
            return "ПТ";
            break;
        case 6:
            return "СБ";
    }
}
let date2 = new Date(2012, 0, 3);
document.write("Результат: " + getWeekDay(date2));

document.write("<p><strong>Завдання №3</strong></p>");
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
document.write("Результат функції <code>getLastDayOfMonth(2020, 1)</code> = " + getLastDayOfMonth(2020, 1));

document.write("<p><strong>Завдання №4</strong></p>");
function getSecondsToTomorrow() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    let today = new Date;
    return Math.round((tomorrow.getTime() - today.getTime()) / 1000);
}
document.write("<p>Результат функції <code>getSecondsToTomorrow()</code> = " + getSecondsToTomorrow() + " cекунд.</p>");

document.write("<p><strong>Завдання №5</strong></p>");
function formatDate(date) {
    let now = new Date();
    let difference = now.getTime() - date.getTime();
    if (difference < 1000) {
        return "прямо зараз";
    } else if (difference < 60000) {
        return Math.round(difference / 1000) + "сек. тому";
    } else if (difference < 3600000) {
        return Math.round(difference / 60000) + "хв. тому";
    } else {
        const options = {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        }
        return date.toLocaleString("uk-UA", options);
    }
}

let date3 = new Date(2024, 11, 14, 11, 11, 11);
let date4 = new Date();
date4.setMinutes(date4.getMinutes() - 30);

let date5 = new Date();
date5.setSeconds(date4.getSeconds() - 50);

let date6 = new Date();
date6.setMilliseconds(date4.getMilliseconds() - 900);


document.write(`<p>Результат функції <code>formatDate(${date3})</code> = ` + formatDate(date3) + "</p>");
document.write(`<p>Результат функції <code>formatDate(${date4})</code> = ` + formatDate(date4) + "</p>");
document.write(`<p>Результат функції <code>formatDate(${date5})</code> = ` + formatDate(date5) + "</p>");
document.write(`<p>Результат функції <code>formatDate(${date6})</code> = ` + formatDate(date6) + "</p>");