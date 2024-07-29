const addProjectBtn = document.querySelector('.addproject-btn');
const projectBtnAccept = document.querySelector('.project-btns-accept');
const projectBtnClose = document.querySelector('.project-btns-close');
const projectNameForm = document.querySelector('.project-name-dialog');

function showModal() {
  projectNameForm.style.display = 'flex';
  addProjectBtn.animate(
    [ { transform: "translateY(100vh)" } ],
    { duration: 250, iterations: 1, }
  );
  setTimeout(() => {
    addProjectBtn.style.display = 'none';
  }, 150);
}

function closeModal() {
  addProjectBtn.style.display = 'block';
  projectNameForm.animate(
    [ { transform: "translateY(100vh)" } ],
    { duration: 250, iterations: 1, }
  );
  setTimeout(() => {
    projectNameForm.style.display = 'none';
  }, 150);
}

export default function toggleProjectModal() {
  addProjectBtn.addEventListener('click', showModal);
  projectBtnClose.addEventListener('click', closeModal);
}

export { projectBtnAccept, closeModal };