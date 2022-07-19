{

const tasks = [];

const onFormSubmit = (event) =>{
    event.preventDefault();
    const addNewTask = document.querySelector(".js-mainSection__section__addTask").value.trim();
}
    const init = () =>{
        const addTaskForm = document.querySelector(".js-mainSection__section__addTaskForm");
        addTaskForm.addEventlistener("submit", onFormSubmit);
    }
    init();
}