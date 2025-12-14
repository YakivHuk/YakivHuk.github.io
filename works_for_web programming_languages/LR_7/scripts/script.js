const loader = document.getElementById("loader");
const result = document.getElementById("result");

if (document.getElementById("task1")) {
    let promise = new Promise((resolve, reject) => {
        loader.style.display = "block";
        setTimeout(() => {
            resolve("Hello, world");
        }, 2000);
    });
    promise
        .finally(() => {
            loader.style.display = "none";
        })
        .then((values) => {
            result.textContent = values;
        })
        .catch((error) => {
            result.textContent = error;
        })
}
else if (document.getElementById("task2")) {
    function checkNumber(num) {
        loader.style.display = "block";
        result.textContent = null;
        setTimeout(() => {
            return new Promise((resolve, reject) => {
            if (num > 10) {
                resolve("Число більше 10");
            } else {
                resolve("Число менше або дорівнює 10");
            }
        })
            .finally(() => {
                loader.style.display = "none";
            })
            .then((values) => {
                result.textContent = values;
            })
            .catch((error) => {
                result.textContent = error;
            })
        }, 1000);
    }
    checkNumber(11);
    setTimeout(() => checkNumber(10), 1500);
}
else if (document.getElementById("task3")) {
    function randomNumber() {
        loader.style.display = "block";
        let delay = Math.floor(Math.random() * 2001) + 1000;
        setTimeout(() => {
            return new Promise((resolve, reject) => {
                resolve(Math.floor(Math.random() * 100) + 1)
            })
                .finally(() => {
                    loader.style.display = "none";
                })
                .then(values => {
                    result.textContent = `Час роботи функції: ${delay} мс. та згенероване число: ${values}`
                })
                .catch((error) => {
                    result.textContent = error;
                })
        }, delay)
    }
    randomNumber();
}
else if (document.getElementById("task4")) {
    function compareNumbers(num1, num2) {
        loader.style.display = "block";
        result.textContent = null;
        setTimeout(() => {
            return new Promise((resolve, reject) => {
            if (num1 > num2) {
                resolve("Перше число більше");
            } else if (num1 < num2) {
                resolve("Друге число більше");
            } else if (num1 === num2) {
                resolve("Числа рівні");
            }
        })
            .finally(() => {
                loader.style.display = "none";
            })
            .then((values) => {
                result.textContent = values;
            })
            .catch((error) => {
                result.textContent = error;
            })
        }, 1000);
    }
    compareNumbers(5, 4);
    setTimeout(() => compareNumbers(3, 6), 2000);
    setTimeout(() => compareNumbers(10, 10), 4000);
}
else if (document.getElementById("task5")) {
    loader.style.display = "block";
    let array = [
        new Promise((resolve, reason) => {
            setTimeout(() => resolve(Math.floor(Math.random() * 9) + 1), 1000)
        }),
        new Promise((resolve, reason) => {
            setTimeout(() => resolve(Math.floor(Math.random() * 9) + 1), 2000)
        }),
        new Promise((resolve, reason) => {
            setTimeout(() => resolve(Math.floor(Math.random() * 9) + 1), 3000)
        })
    ]
    Promise.all(array)
        .then((values) => {
            loader.style.display = "none";
            result.textContent = "Випадкові числа: ";
            let sum = 0;
            values.forEach(value => {
                result.textContent += value + " "
                sum += value;
            })
            result.textContent += "Сума: " + sum;
        })
        .catch((error) => {
            result.textContent = error;
        })
}
