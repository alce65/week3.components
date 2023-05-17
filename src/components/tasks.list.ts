/* eslint-disable no-unused-vars */
import { getMockTasks } from '../data/mock.tasks';
import { Task } from '../models/task';
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

  render() {
    super.cleanHtml(this.selector);
    this.template = this.createTemplate();
    const element = super.render();
    document
      .querySelectorAll('.button')
      .forEach((item) =>
        item.addEventListener('click', this.handleDelete.bind(this))
      );
    return element;
  }

  handleDelete(event: Event) {
    const element = event.target as HTMLSpanElement;
    this.tasks = this.tasks.filter((item) => item.id !== element.dataset.id);
    console.log(this.tasks);
    this.render();
  }

  createTemplate() {
    const list = this.tasks
      .map(
        (item) => `
          <li>
            <input type="checkbox" ${item.isCompleted ? 'checked' : ''}>
            <span>${item.id}</span>
            <span>${item.title}</span>
            <span>${item.owner}</span>
            <i class="button" role="button" data-id=${item.id}>🗑️</i>
          </li>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}
