{

    const tasks = [

    ];
    renderTaskList = () => {

        let newPosition = "";
        for (const task of tasks) {
            newPosition += 
            `
            <li class="mainSection__section__taskListItem ${task.status ? "mainSection__section__taskListItem--done" : ""}">
                <button class="mainSection__section__taskList__checkedButton js-mainSection__section__taskList__checkedButton">
                    ${task.status ? `<ion-icon class="mainSection__section__taskList__icon" name="checkmark-outline"></ion-icon>` : ""}
                </button>
                    ${task.content}
                <button class="mainSection__section__taskList__deleteTask js-mainSection__section__taskList__deleteTask"><ion-icon class="mainSection__section__taskList__icon" name="trash-outline"></ion-icon>
                </button>
            </li>
            `;
        }
        document.querySelector(".js-mainSection__section__taskList").innerHTML = newPosition;
        const removeButtons = document.querySelectorAll(".js-mainSection__section__taskList__deleteTask");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                tasks.splice(index, 1)
                renderTaskList();
            });
        });
        const statusTaskButtons = document.querySelectorAll(".js-mainSection__section__taskList__checkedButton");
        statusTaskButtons.forEach((statusTaskButton, index) => {
            statusTaskButton.addEventListener("click", () => {
                tasks[index].status = !tasks[index].status;
                renderTaskList();
            });
        });
    }

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
            status: false,

        });
        renderTaskList();
        resetformfield();
    }

    const focusTaskInput = () => {
        const focusNewTask = document.querySelector(".js-mainSection__section__addTask");
        focusNewTask.focus();
    }
    const resetformfield = () => {
        const form = document.querySelector(".js-mainSection__section__addTaskForm");
        form.reset();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".js-mainSection__section__addTask").value.trim();
        if (newTask === "") {
            focusTaskInput();
            return
        }
        addNewTask(newTask);
    }

    const init = () => {
        const form = document.querySelector(".js-mainSection__section__addTaskForm");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
}