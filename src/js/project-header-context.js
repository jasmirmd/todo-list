import Projects from './projects-array';

export default function projectHeaderContext() {
  const projectsContext = document.querySelector('.project-context');

  let option;

  Projects.forEach((target) => {
    if(target.selected) {
      option = target.name;
    } else if(Projects.every((i) => !i.selected)) {
      option = 'Select a project';
    }
  });

  projectsContext.textContent = option;
}