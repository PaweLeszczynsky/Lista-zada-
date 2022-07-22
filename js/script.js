{

    const tasks = [

    ];
    renderTaskList = () => {

        let newPosition = "";
        for (const task of tasks) {
            newPosition += `
            <li class="mainSection__section__taskListItem"><button class="mainSection__section__taskList__checkedButton"><ion-icon class="mainSection__section__taskList__icon" name="checkmark-outline"></ion-icon></button>${task.content}<button class="mainSection__section__taskList__deleteTask"><ion-icon class="mainSection__section__taskList__icon" name="trash-outline"></ion-icon></button></li>
            `;
        }
        document.querySelector(".js-mainSection__section__taskList").innerHTML = newPosition;
    }

    const addNewTask = (newTask) => {
        tasks.push({
            content: newTask,
            status: false,

        });
        renderTaskList();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".js-mainSection__section__addTask").value.trim();
        if (newTask === "") {
            return;
        }
        addNewTask(newTask);
    }

    const init = () => {
        const form = document.querySelector(".js-mainSection__section__addTaskForm");
        form.addEventListener("submit", onFormSubmit);


    };
    init();
}