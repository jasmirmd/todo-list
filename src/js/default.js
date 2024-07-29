import toggleProjectModal from "./project-dialog";
import projectHeaderContext from "./project-header-context";
import projectManager from "./project-manager";
import renderProjects from "./render-projects";
import renderTasks from "./render-tasks";
import selectedProject from "./selected-project";
import taskManager from "./task-manager";
import restoresFromLocalStorage from './utils/restore-from-local-storage';
import sidebarAnimation from "./sidebar-animation";

export default function Default() {
  restoresFromLocalStorage();
  selectedProject();
  toggleProjectModal();
  projectManager();
  taskManager();
  projectHeaderContext();
  renderProjects();
  renderTasks();
  sidebarAnimation();
}