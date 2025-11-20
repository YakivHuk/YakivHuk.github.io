const additionField = document.getElementById("additionField");
const taskList = document.getElementById("taskList");
const filterButton = document.getElementById("filterButton");
let tasks = [];

function makingChanges() {
    tasks = [];
    const taskElements = document.querySelectorAll(".task");
    for (const task of taskElements) {
        tasks.push({
            name: task.querySelector(".task-name").textContent,
            date: task.querySelector(".date-time").textContent,
            checked: task.querySelector(".checkbox").checked
        });
    }
}

function renderTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("taskList")) || [];
    for (const task of savedTasks) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <input type="checkbox" class="checkbox">
            <label class="task-name">${task.name}</label>
            <p class="date-time"><i class="fa-solid fa-calendar-check"></i> ${task.date}</p>
        `;
        taskList.appendChild(taskElement);
        taskElement.querySelector(".checkbox").checked = task.checked;
        addEventListeners(taskElement);
    }
}

document.addEventListener("DOMContentLoaded", renderTasks);

function addEventListeners(taskElement) {
    const checkbox = taskElement.querySelector(".checkbox");
    const taskName = taskElement.querySelector(".task-name");
    const dateTime = taskElement.querySelector(".date-time");

    function taskCompleted() {
        checkbox.style.display = "none";
        taskName.style.color = "gray";
        taskName.style.textDecoration = "line-through";
        dateTime.style.color = "gray";
        makingChanges();
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }

    if (checkbox.checked == true) {
        taskCompleted();
    } else {
        checkbox.addEventListener("input", taskCompleted)
    }

    taskElement.addEventListener("mouseenter", () => {
        if (!taskElement.querySelector("input[type=\"text\"]")) {
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
            deleteButton.classList.add("delete-button");
            taskElement.style.paddingRight = "140px";
            dateTime.style.right = "50px";
            taskElement.appendChild(deleteButton);
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(taskElement);
                makingChanges();
                localStorage.setItem("taskList", JSON.stringify(tasks));
            }
            );
        }
    });

    taskElement.addEventListener("mouseleave", () => {
        const deleteButton = taskElement.querySelector(".delete-button");
        if(deleteButton) taskElement.removeChild(deleteButton);
        taskElement.style.paddingRight = "110px";
        dateTime.style.right = "20px";
    });

    function inputTask() {
        if (taskElement.querySelector(".delete-button")) {
            taskElement.removeChild(taskElement.querySelector(".delete-button"));
            taskElement.style.paddingRight = "110px";
            dateTime.style.right = "20px";
        }
        const input = document.createElement("input");
        taskElement.style.backgroundColor = "transparent";
        checkbox.style.opacity = "0";
        taskName.style.opacity = "0";
        dateTime.style.opacity = "0";
        input.setAttribute("type", "text");
        input.classList.add("input-task");
        input.value = taskName.textContent;
        taskElement.appendChild(input);
        input.focus();
        taskElement.removeEventListener("dblclick", inputTask);
        input.addEventListener("keypress", (event) => {
            if (event.keyCode == 13) {
                taskName.textContent = input.value;
                taskElement.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                checkbox.style.opacity = "1";
                taskName.style.opacity = "1";
                dateTime.style.opacity = "1";
                taskElement.removeChild(input);
                taskElement.addEventListener("dblclick", inputTask);
                makingChanges();
                localStorage.setItem("taskList", JSON.stringify(tasks));
            }
        })
    }

    taskElement.addEventListener("dblclick", inputTask);
}

additionField.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        let published = new Date();
        const options = {
            day: "numeric",
            month: "numeric",
            year: "2-digit",
            hour: "numeric",
            minute: "numeric"
        }
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <input type="checkbox" class="checkbox">
            <label class="task-name">${additionField.value}</label>
            <p class="date-time"><i class="fa-solid fa-calendar-check"></i> ${published.toLocaleString("uk-Uk", options)}</p>`;
        taskList.prepend(taskElement);
        additionField.value = null;
        addEventListeners(taskElement);
        tasks.splice(0, 0, {
            name: taskElement.querySelector(".task-name").textContent, 
            date: taskElement.querySelector(".date-time").textContent, 
            checked: taskElement.querySelector(".checkbox").checked
        });
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }
})

filterButton.addEventListener("click", () => {
    tasks = [];
    const taskElements = document.querySelectorAll(".task");
    const filterCondition = document.getElementById("filterCondition");
        for (const task of taskElements) {
        tasks.push({
            name: task.querySelector(".task-name").textContent,
            date: task.querySelector(".date-time").textContent,
            checked: task.querySelector(".checkbox").checked
        });
        taskList.removeChild(task);
    }

    if (filterCondition.textContent == "Сортувати за призначеними") {
        for (const task of tasks.sort((a, b) => a.checked - b.checked)) {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.innerHTML = `
            <input type="checkbox" class="checkbox">
            <label class="task-name">${task.name}</label>
            <p class="date-time"><i class="fa-solid fa-calendar-check"></i> ${task.date}</p>
            `;
            taskList.appendChild(taskElement);
            taskElement.querySelector(".checkbox").checked = task.checked;
            addEventListeners(taskElement);
        }
        filterCondition.textContent = "Сортувати за виконаними";
    } else if (filterCondition.textContent == "Сортувати за виконаними") {
        for (const task of tasks.sort((a, b) => b.checked - a.checked)) {
            const taskElement = document.createElement("div");
            taskElement.classList.add("task");
            taskElement.innerHTML = `
                <input type="checkbox" class="checkbox">
                <label class="task-name">${task.name}</label>
                <p class="date-time"><i class="fa-solid fa-calendar-check"></i> ${task.date}</p>
            `;
            taskList.appendChild(taskElement);
            taskElement.querySelector(".checkbox").checked = task.checked;
            addEventListeners(taskElement);
        }
        filterCondition.textContent = "Сортувати за призначеними";
    }
    localStorage.setItem("taskList", JSON.stringify(tasks));
})