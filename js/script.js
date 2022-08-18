{
    let tasks = [];
    let hideDoneTasks = false;
    const renderTaskList = () => {
        let newPosition = "";
        for (const task of tasks) {
            newPosition +=
                `
                <li class="section__taskListItem ${task.status ? "section__taskListItem--done" : ""}">
                    <button class="section__taskList__checkedButton js-section__taskList__checkedButton">
                        ${task.status ? `<ion-icon class="section__taskList__icon" name="checkmark-outline"></ion-icon>` : ""}
                    </button>
                        ${task.content}
                    <button class="section__taskList__deleteTask js-section__taskList__deleteTask"><ion-icon class="section__taskList__icon" name="trash-outline"></ion-icon>
                    </button>
                </li>
                `;
        }
        document.querySelector(".js-section__taskList").innerHTML = newPosition;
        bindEvents();
    }
    const isArrayEmpty = (array) => {
        return array.length === 0 ? true : false;
    };

    const renderButtons = () => {
        let arrayEmpty = isArrayEmpty(tasks);

        let addButtons =
            `
        <span class="section__header__text">Lista zadań</span>
        <button class="${arrayEmpty === false ? "section__tasksInteractionButton" : "section__tasksInteractionButton--hidden"}">Ukryj ukończone</button>
        <button class="${arrayEmpty === false ? "section__tasksInteractionButton" : "section__tasksInteractionButton--hidden"}">Ukończ wszystkie</button>
        `;
        document.querySelector(".js-section__header").innerHTML = addButtons;
    };
    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-section__taskList__deleteTask");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks = [
                    ...tasks.slice(0, index),
                    ...tasks.slice(index+1),
                ];
                renderTaskList();
                renderButtons();
            });
        });
        const statusTaskButtons = document.querySelectorAll(".js-section__taskList__checkedButton");
        statusTaskButtons.forEach((statusTaskButton, index) => {
            statusTaskButton.addEventListener("click", () => {
                tasks = [
                    ...tasks.slice(0, index),
                    {...tasks[index], status:!tasks[index].status},
                    ...tasks.slice(index+1),

                ];
                renderTaskList();
                renderButtons();
            });
        });
    }
    const addNewTask = (newTask) => {
        tasks = [
            ...tasks,
            {
                content: newTask,
                status: false,
            },
        ];
        renderTaskList();
        renderButtons();
        resetformfield();
    }
    const focusTaskInput = () => {
        const focusNewTask = document.querySelector(".js-addTaskForm__addTaskInput");
        focusNewTask.focus();
    }
    const resetformfield = () => {
        const form = document.querySelector(".js-addTaskForm");
        form.reset();
    }
    const onFormSubmit = (event) => {
        event.preventDefault();
        renderButtons();
        const newTask = document.querySelector(".js-addTaskForm__addTaskInput").value.trim();
        if (newTask === "") {
            focusTaskInput();
            return
        }
        addNewTask(newTask);
    }
    const init = () => {
        const form = document.querySelector(".js-addTaskForm");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}