const countTasksLabel = document.getElementById("countTasksLabel");
const nextTaskButton = document.getElementById("nextTaskButton");
const taskLabel = document.getElementById("taskLabel");
const options = document.getElementsByName("options");
const output = document.getElementById("output");

function* multiplicationTableCheck() {
    let count = 0;
    let correctAnswer = 0;
    let num1;
    let num2;
    let result;
    let isTaskSolved = false;
    let correctOption;
    let variats;
    while(true) {
        const event = yield;
        if (event === "next" || event === "load") {
            if (event != "load" && !isTaskSolved) {
                output.textContent = "Ви не відповіли!";
            } else {
                isTaskSolved = false;
                countTasksLabel.textContent = `Загальний рахунок ${count === 0 ? 100 : Math.round(correctAnswer/count * 1000) / 10}% (${correctAnswer} правильних відповідей з ${count})`;
                num1 = Math.floor(Math.random() * 10) + 1;
                num2 = Math.floor(Math.random() * 10) + 1;
                result = num1 * num2;
                correctOption = Math.floor(Math.random() * 3) * 2;
                taskLabel.textContent = `${num1} * ${num2} = `;
                variats = [];
                for (let i = 0; i <= 6; i+=2) {
                    options[i].disabled = false;
                    options[i].checked = false;
                    let incorrect;
                    if (correctOption === i) {
                        options[i].value = result;
                        options[i+1].textContent = result;
                    } else {
                        do {
                            incorrect = Math.floor(Math.random() * 6) * 2 - 6;
                            if (incorrect + result < 0) incorrect += 6;
                        } while (incorrect == 0 || variats.includes(result + incorrect));
                        options[i].value = result + incorrect;
                        options[i+1].textContent = result + incorrect;
                    }
                    variats.push(+options[i].value);
                }
                output.textContent = null;
            }
        } 

        if (event === "verify") {
            for (i = 0; i <= 6; i += 2) {
                if (options[i].checked) {
                    if (+options[i].value === result) {
                        count++;
                        output.textContent = "Правильно!";
                        correctAnswer++;
                        isTaskSolved = true;
                    } else { 
                        count++;
                        output.textContent = `Помилка, правильна відповідь «${result}»`;
                        isTaskSolved = true;
                    }
                }
                options[i].disabled = true;
            }
        }
    }
}

const nextTask = multiplicationTableCheck();
nextTask.next();

document.addEventListener("DOMContentLoaded", () => nextTask.next("load"));
nextTaskButton.addEventListener("click", () => nextTask.next("next"));
for (i = 0; i <= 6; i += 2) {
    options[i].addEventListener("change", () => nextTask.next("verify"));
};