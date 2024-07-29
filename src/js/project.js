export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.isRemovable = true;
    this.removed = false;
    this.selected = false;
  }

  remove() {
    this.removed = true;
  }

  toggleSelected() {
    this.selected = !this.selected;
  }
}