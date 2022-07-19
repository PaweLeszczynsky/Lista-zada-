{

    const tasks = [
        
    ];

    renderTaskList = () => {
        
        let newPosition="";
        for (const task of tasks) {
            newPosition += `
            <li class="mainSection__section__taskListItem">${task.content}</li>
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
        renderTaskList();
        const form = document.querySelector(".js-mainSection__section__addTaskForm");
        form.addEventListener("submit", onFormSubmit);

    };
    init();
}