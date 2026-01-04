// renderTasks.js — для роботи з DOM (додавання та видалення елементів).

// import refs from './refs';

// =========================================================================
// renderTasks(tasks)
// Отримує  - масив з завданнями
// Повертає - розмітку для списку завдань
// -------------------------------------------------------------------------
export function renderTasks(tasks) {
  // Створює розмітку
  let markup = tasks
    .map(task => {
      return `
        <li class="task-item" id="${task.id}">
          <div class="task-content">
            <p class="id">${task.id}</p>
            <p class="name">${task.name}</p>
            <p class="description">${task.description}</p>
          </div>
          <button type="button" class="btn-delete-task">Delete</button>
        </li>`;
    })
    .join('');

  // Повертає розмітку
  return markup;
}

// =========================================================================
