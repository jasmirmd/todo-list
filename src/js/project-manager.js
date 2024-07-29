import Projects from "./projects-array";
import Project from "./project";

import { projectBtnAccept } from "./project-dialog";
import { closeModal } from "./project-dialog";

import renderProjects from "./render-projects";
import saveToLocalStorage from "./utils/save-to-local-storage";

const defaultProject = new Project('Default Project');
defaultProject.isRemovable = false;
defaultProject.selected = true;
delete defaultProject.removed;
Projects.push(defaultProject);

export default function projectManager() { 
  projectBtnAccept.addEventListener('click', () => {
    const projectNameInput = document.querySelector('.project-name-input');    

    if(projectNameInput.value) {
      Projects.push(new Project(projectNameInput.value));
      projectNameInput.value = '';
      renderProjects();
      closeModal();
      saveToLocalStorage();
    } else {
      alert('Error creating a new project');
    }
  });
}