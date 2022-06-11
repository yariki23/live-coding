const changeTaskStatus = (event) => {
  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find((task) => task.id === taskId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

listElem.addEventListener("click", changeTaskStatus);

const createTaskHandler = () => {
  const inputElem = document.querySelector(".task-input");
  const newInput = inputElem.value;

  if (!newInput) {
    return;
  }

    tasks.push({
        text: newInput,
        done: false,
        id: tasks.length + 1
    })
    
  inputElem.value = "";
  renderTasks(tasks);
};

buttonELem.addEventListener("click", createTaskHandler);