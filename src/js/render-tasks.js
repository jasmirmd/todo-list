import Projects from './projects-array';
import newElement from './utils/new-element';
import cleanContainer from './utils/clean-container';
import saveToLocalStorage from './utils/save-to-local-storage';

export default function renderTasks() {
  const tasksContainer = document.querySelector('.tasks-container');

  Projects.forEach((target) => {
    if (target.selected) {
      cleanContainer(tasksContainer);

      target.tasks.forEach((trg) => {
        if (!trg.removed) {
          const taskContainer = newElement('div', 'task');
          const checkAndTitle = newElement('div');
          const taskTitle = newElement('p', 'task-title');
          const checkTask = newElement('input', 'task-complete');
          const removeTaskBtn = newElement('button', 'task-remove-btn');

          checkAndTitle.append(checkTask, taskTitle);

          checkTask.setAttribute('type', 'checkbox');
          checkTask.checked = trg.completed;
          taskTitle.textContent = trg.title;

          if (trg.completed) {
            taskContainer.classList.add('completed');
          }

          checkTask.addEventListener('change', () => {
            trg.toggleCompleted();
            if (trg.completed) {
              taskContainer.classList.add('completed');
            } else {
              taskContainer.classList.remove('completed');
            }
            renderTasks();
            saveToLocalStorage();
          });

          removeTaskBtn.textContent = 'x';
          removeTaskBtn.addEventListener('click', () => {
            trg.remove();
            renderTasks();
            saveToLocalStorage();
          });

          taskContainer.append(checkAndTitle, removeTaskBtn);
          tasksContainer.appendChild(taskContainer);
        }
      });
    }
  });
}