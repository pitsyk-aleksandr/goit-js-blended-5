// main.js — для ініціалізації застосунку та основної логіки

import refs from './js/refs';

import { addNewTask, getTasks } from './js/localStorageApi';

import { setThemeLS, getThemeLS, setThemeBody } from './js/theme';

import { renderTasks } from './js/renderTasks';

import {} from './js/tasks';

// Отримання поточної схеми з LocalStorage
// та встановлюємо кольорову тему для body
setThemeBody(getThemeLS());

// Отримуємо список задач з LocalStorage
let tasks = getTasks();

// Якщо список задач НЕ пустий, то створюється новий масив
if (tasks !== null) {
  // Створюємо розмітку для задач, які є в LocalStorage
  let markup = renderTasks(tasks);

  // Додаємо розмітку в HTML для всіх задач з масиву
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

// Слухач події на формі
refs.formAddTask.addEventListener('submit', onFormSubmit);

// Обробник події форми вводу
function onFormSubmit(event) {
  event.preventDefault();

  const taskName = refs.newTaskName.value.trim();
  refs.newTaskName.value = taskName;
  const taskDescr = refs.newTaskDescr.value.trim();
  refs.newTaskDescr.value = taskDescr;
  console.log(`taskName`, taskName);
  console.log(`taskDescr`, taskDescr);
  if (taskName === '' || taskDescr === '') {
    console.log(`ERROR`);
    return;
  }
  // Додати нове завдання в LocalStorage
  addNewTask(taskName, taskDescr);

  // Видалити ВСІ задачі зі списку на сайті (очистити ul id="task-list")
  refs.taskList.innerHTML = '';

  // Отримуємо список задач з LocalStorage
  let tasks = getTasks();

  // Створюємо розмітку для задач, які є в LocalStorage
  let markup = renderTasks(tasks);

  // Додаємо розмітку в HTML для всіх задач з масиву
  refs.taskList.insertAdjacentHTML('beforeend', markup);

  // Перезагорузка форми вводу
  refs.formAddTask.reset();
}

// Слухач подій на списку завдань
refs.taskList.addEventListener('click', onTaskListClick);

// =========================================================================
// Обробник подій при клікі на кнопку списка завдань
function onTaskListClick(event) {
  // Перевірка, що нажата саме кнопка
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  // Повертаємо батьківський елемент li, в якому знаходиться кнопка
  const itemLiEl = event.target.closest('li');

  // Знаходимо id цього елемента
  const itemId = Number(itemLiEl.id);

  // Отримуємо список задач з LocalStorage
  let tasks = getTasks();
  console.log(`tasks`, tasks);

  // Фільтруємо масив, видаляючи з масива об'єкт з вибраним id
  let newTasks = tasks.filter(task => task.id !== itemId);
  console.log(`newTasks`, newTasks);

  // Перезаписуємо новий масив зі списком задач в LocalStorage
  localStorage.setItem('tasks', JSON.stringify(newTasks));

  // Видалити ВСІ задачі зі списку на сайті (очистити ul id="task-list")
  refs.taskList.innerHTML = '';

  // Отримуємо новий список задач з LocalStorage
  // tasks = getTasks();

  // Створюємо розмітку для задач, які є в LocalStorage
  let markup = renderTasks(newTasks);

  // Додаємо розмітку в HTML для всіх задач з масиву
  refs.taskList.insertAdjacentHTML('beforeend', markup);
}

// Зміна кольорової теми
refs.btnToggleTheme.addEventListener('click', onToggleTheme);

function onToggleTheme(event) {
  // Отримання поточної схеми з LocalStorage
  let themeCurrent = getThemeLS();
  // Змінна нової теми
  let themeNew;

  // Зміна схеми кольору - значення data-аргумента в body
  // Переключаем атрибут data-theme между light и dark
  if (themeCurrent === 'dark') {
    themeNew = 'light';
  } else {
    themeNew = 'dark';
  }
  // Встановлюємо нову тему на body
  setThemeBody(themeNew);
  // Встановлюємо нову тему на LocalStorage
  setThemeLS(themeNew);
}
