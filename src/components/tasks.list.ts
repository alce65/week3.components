/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { getMockTasks } from '../data/mock.tasks';
import { Task } from '../models/task';
import { AddTask } from './add.task';
import { Component } from './component';

import './tasks.list.css';

export class TasksList extends Component {
  tasks: Task[];
  constructor(selector: string) {
    super(selector);
    this.tasks = getMockTasks();
    this.tasks[0].isCompleted = true;

    this.render();
    console.log(this.element);
    console.log(this.tasks);
  }

  render(): void {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
    new AddTask('section.tasks', this.handleAdd.bind(this));
    this.element
      .querySelectorAll('i.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    this.element
      .querySelectorAll('input')
      .forEach((item) =>
        item.addEventListener('change', this.handleChange.bind(this))
      );
  }

  handleDelete(event: Event): void {
    const element = event.target as HTMLSpanElement;
    this.tasks = this.tasks.filter((item) => item.id !== element.dataset.id);
    console.log(this.tasks);
    this.render();
  }

  handleChange(event: Event): void {
    const element = event.target as HTMLSpanElement;
    console.log(element);
    this.tasks = this.tasks.map((item) => {
      item.isCompleted =
        item.id === element.dataset.id ? !item.isCompleted : item.isCompleted;
      return item;
    });
    console.log(this.tasks);
  }

  handleAdd(task: Task) {
    console.log(task);
    this.tasks.push(task);
    console.log(this.tasks);
    this.render();
  }

  createTemplate() {
    const list = this.tasks
      .map(
        (item) => `
          <li>
            <input type="checkbox" data-id=${item.id}
            ${item.isCompleted ? 'checked' : ''}>
            <span>${item.id}</span>
            <span>${item.title}</span>
            <span>${item.owner}</span>
            <i class="button" role="button" data-id=${item.id}>🗑️</i>
          </li>`
      )
      .join('');

    return `
    <h2>Lista de tareas</h2>
    <section class="tasks"></section><ul>${list}</ul>`;
  }
}
