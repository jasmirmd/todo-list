const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

export default function sidebarAnimation() {
  let active = false;

  function toggleMenu() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      if (active) {
        sidebar.classList.add('hidden');
        active = false;
      } else {
        sidebar.classList.remove('hidden');
        active = true;
      }
    }
  }

  menuIcon.addEventListener('click', toggleMenu);

  function initializeSidebar() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      sidebar.classList.add('hidden');
      active = false;
    } else {
      sidebar.classList.remove('hidden');
      active = true;
    }
  }

  initializeSidebar();
  window.addEventListener('resize', initializeSidebar);
}