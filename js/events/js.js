const tasks = [
  { text: "Buy milk", done: false, id: 0 },
  { text: "Pick up Tom from airport", done: false, id: 1 },
  { text: "Visit party", done: false, id: 2 },
  { text: "Visit doctor", done: true, id: 3 },
  { text: "Buy meat", done: true, id: 4 },
];

const listElem = document.querySelector('.list');
const buttonELem = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

//1.add events to elements
//2.write handlers

const createBtn = document.querySelector('.create-task-btn');

//in:event (optional)
//out: undefined
function createTaskHandler(event) {
  console.log(event);
}

//in: str, callback
//out: undefined
createBtn.addEventListener('click', createTaskHandler);

