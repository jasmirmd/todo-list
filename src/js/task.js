export default class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
    this.removed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  remove() {
    this.removed = true;
  }
}