import Projects from "./projects-array";
import renderTasks from "./render-tasks";

import Task from "./task";
import saveToLocalStorage from "./utils/save-to-local-storage";

export default function taskManager() {
  const addTaskBtn = document.querySelector('.addtask-btn');

  addTaskBtn.addEventListener('click', () => {
    const taskTitleInput = document.querySelector('.task-title-input');

    if(taskTitleInput.value) {
      Projects.forEach((target) => {
        if(target.selected) {
          target.tasks.push(new Task(taskTitleInput.value));
          taskTitleInput.value = '';

          renderTasks();
          saveToLocalStorage();
        }
      });
    } else {
      alert('Error creating a new task');
    }
  });
}