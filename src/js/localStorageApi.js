// localStorageApi.js — для збереження та завантаження завдань у локальному сховищі.

// =========================================================================
// addNewTask(taskName, taskText);
// Функція - Додати нове завдання в LocalStorage
// -------------------------------------------------------------------------
export function addNewTask(taskName, taskDescr) {
  // Отримуємо список задач
  let tasks = getTasks();
  let taskLastId = getTaskLastId();

  // Якщо список задач пустий, то створюється новий масив
  if (tasks === null) {
    tasks = [];
    taskLastId = 0;
  }
  taskLastId = taskLastId + 1;

  // Додаємо задачу до масиву списка задач
  tasks.push({ id: taskLastId, name: taskName, description: taskDescr });

  // Додаємо масив зі списком задач в LocalStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  localStorage.setItem('lastId', JSON.stringify(taskLastId));
}
// =========================================================================

// =========================================================================
// getTasks()
// Отримання масиву задач з LocalStorage
// -------------------------------------------------------------------------
export function getTasks() {
  const tasksStr = localStorage.getItem('tasks');
  return JSON.parse(tasksStr);
}
// =========================================================================

// =========================================================================
// getTaskLastId()
// Отримання індекса останньої задачі з LocalStorage
// -------------------------------------------------------------------------
export function getTaskLastId() {
  const taskLastIdStr = localStorage.getItem('lastId');
  return JSON.parse(taskLastIdStr);
}
// =========================================================================

// =========================================================================
// delTaskById(id)
// Видалення задачі з LocalStorage по індексу
// -------------------------------------------------------------------------
export function delTaskById(id) {
  // Отримуємо список задач
  let tasks = getTasks();

  return JSON.parse(taskLastIdStr);
}
// =========================================================================


