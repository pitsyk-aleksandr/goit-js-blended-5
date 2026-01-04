// refs.js — для зберігання посилань на DOM елементи.
const refs = {
  btnToggleTheme: document.querySelector('.btn-toggle-theme'),
  formAddTask: document.querySelector('.form-add-task'),
  newTaskName: document.querySelector('#task-name'),
  newTaskDescr: document.querySelector('#task-description'),
  btnAddTask: document.querySelector('.btn-add-task'),
  taskList: document.querySelector('#task-list'),
};

export default refs;
