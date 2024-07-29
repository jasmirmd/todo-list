import projectHeaderContext from "./project-header-context";

import Projects from "./projects-array";

import renderProjects from "./render-projects";
import renderTasks from "./render-tasks";
import saveToLocalStorage from "./utils/save-to-local-storage";

export default function selectedProject() {
  const projectsContainer = document.querySelector('.projects-container');

  projectsContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'DIV') {
      const items = Array.from(projectsContainer.querySelectorAll('div'));
      const index = items.indexOf(e.target);

      Projects.map((i) => i.selected = false);
      console.log(Projects);

      Projects[index].toggleSelected();

      renderProjects();
      projectHeaderContext();
      renderTasks();
      saveToLocalStorage();
    } else {
      renderProjects();
    }
  })
}