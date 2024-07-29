import Projects from '../projects-array';
import Project from '../project';
import Task from '../task';

export default function restoreFromLocalStorage() {
  const storedProjects = JSON.parse(localStorage.getItem('projects'));
  if (storedProjects) {
    Projects.length = 0;

    storedProjects.forEach(projectData => {
      const project = new Project(projectData.name);
      project.tasks = projectData.tasks.map(taskData => {
        const task = new Task(taskData.title);
        task.completed = taskData.completed;
        task.removed = taskData.removed;
        return task;
      });
      project.isRemovable = projectData.isRemovable;
      project.removed = projectData.removed;
      project.selected = projectData.selected;
      Projects.push(project);
    });
  }
}
