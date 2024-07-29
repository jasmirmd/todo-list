import Projects from "./projects-array";

import newElement from './utils/new-element';
import cleanContaner from './utils/clean-container';
import projectHeaderContext from "./project-header-context";
import saveToLocalStorage from "./utils/save-to-local-storage";

export default function renderProjects() {
  const projectsContainer = document.querySelector('.projects-container');

  cleanContaner(projectsContainer);

  Projects.forEach((target, index) => {
    const projectContainer = newElement('div', 'project');
    projectContainer.textContent = target.name;

    if(target.isRemovable) {
      projectContainer.className += ' removable';
      const projectRemoveBtn = newElement('button', 'project-remove-btn');
      projectRemoveBtn.setAttribute('type', 'button');
      projectRemoveBtn.textContent = 'x';
      projectRemoveBtn.addEventListener('click', () => {
        Projects.splice(index, 1);
        renderProjects();
        projectHeaderContext();
        saveToLocalStorage();
      });
      projectContainer.appendChild(projectRemoveBtn);
    }

    if(target.selected) {
      projectContainer.className += ' selected';
    }

    projectsContainer.appendChild(projectContainer);
  });
}