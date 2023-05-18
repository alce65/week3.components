/* eslint-disable no-unused-vars */
import { Task } from '../models/task';
import { Component } from './component';

export class AddTask extends Component {
  constructor(selector: string, public handleAdd: (task: Task) => void) {
    super(selector);
    this.render();
    console.log(this.element);
  }

  handleSubmit(event: Event) {
    event.preventDefault();

    const form = this.element as HTMLFormElement;
    const task = new Task(
      (form.elements.namedItem('title') as HTMLInputElement).value,
      (form.elements.namedItem('owner') as HTMLInputElement).value
    );
    console.log(task);
    this.handleAdd(task);
  }

  render(): void {
    this.cleanHtml();
    this.template = this.createTemplate();
    super.render();
    this.element.addEventListener('submit', this.handleSubmit.bind(this));
  }

  createTemplate() {
    return `
      <form>
        <div>
          <label for="title">Titulo</label>
          <input type="text" name="title" id="title" required>
        </div>
        <div>
          <label for="owner">Responsable</label>
          <input type="text" name="owner" id="owner">
        </div>
        <button type="submit">Añadir</button>
      </form>
    `;
  }
}
