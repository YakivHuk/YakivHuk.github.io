const countTasksLabel = document.getElementById("countTasksLabel");
const nextTaskButton = document.getElementById("nextTaskButton");
const taskLabel = document.getElementById("taskLabel");
const textbox = document.getElementById("textbox");
const verifyButton = document.getElementById("verifyButton");
const output = document.getElementById("output");

function* multiplicationTableCheck() {
    let count = 0;
    let correctAnswer = 0;
    let num1;
    let num2;
    let result;
    let isTaskSolved = false;
    while(true) {
        const event = yield;
        if (event === "next" || event === "load") {
            if (event != "load" && !isTaskSolved) {
                output.textContent = "Ви не перевірили розв'язок!";
            } else {
                isTaskSolved = false;
                countTasksLabel.textContent = `Загальний рахунок ${count === 0 ? 100 : Math.round(correctAnswer/count * 1000) / 10}% (${correctAnswer} правильних відповідей з ${count})`;
                num1 = Math.floor(Math.random() * 10) + 1;
                num2 = Math.floor(Math.random() * 10) + 1;
                result = num1 * num2;
                taskLabel.textContent = `${num1} * ${num2} = `;
                output.textContent = null;
            }
        } 

        if (event === "verify") {
            if (textbox.value === "") {
                output.textContent = "Ви не ввели результат!";
            } 
            else if (isTaskSolved) {
                output.textContent = "Ви вже розв'язкували це завдання!";
            }
            else if (+textbox.value === result) {
                count++;
                output.textContent = "Правильно!";
                correctAnswer++;
                isTaskSolved = true;
            } else { 
                count++;
                output.textContent = `Помилка, правильна відповідь «${result}»`;
                isTaskSolved = true;
            }
            textbox.value = null;
        }
    }
}

const nextTask = multiplicationTableCheck();
nextTask.next();

document.addEventListener("DOMContentLoaded", () => nextTask.next("load"))
nextTaskButton.addEventListener("click", () => nextTask.next("next"));
verifyButton.addEventListener("click", () => nextTask.next("verify"))