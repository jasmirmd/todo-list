import Projects from '../projects-array';

export default function saveToLocalStorage() {
  const projectsToSave = Projects.map(project => ({
    name: project.name,
    tasks: project.tasks.map(task => ({
      title: task.title,
      completed: task.completed,
      removed: task.removed
    })),
    isRemovable: project.isRemovable,
    removed: project.removed,
    selected: project.selected
  }));
  localStorage.setItem('projects', JSON.stringify(projectsToSave));
}
