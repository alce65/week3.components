/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { ApiRepository } from '../data/api.repository';
import { getTasks, setTasks } from '../data/local.repository';
import { Task } from '../models/task';
import { AddTask } from './add.task';
import { Component } from './component';

// TEMP import './tasks.list.css';

export class TasksList extends Component {
  tasks: Task[];
  repo: ApiRepository;
  constructor(selector: string) {
    super(selector);
    this.tasks = [];
    this.repo = new ApiRepository();
    this.handleLoad();
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

  async handleLoad() {
    this.tasks = await this.repo.getAll();
    this.render();
    console.log(this.element);
  }

  handleDelete(event: Event): void {
    const element = event.target as HTMLSpanElement;
    this.repo.delete(element.dataset.id as string);
    this.tasks = this.tasks.filter((item) => item.id !== element.dataset.id);
    this.render();
  }

  handleChange(event: Event): void {
    const element = event.target as HTMLSpanElement;
    const id = element.dataset.id as string;
    console.log(element);
    const changedTask = this.tasks.find((item) => item.id === id);
    if (!changedTask) return;
    this.repo.update(id, {
      isCompleted: !changedTask.isCompleted,
    });

    this.tasks = this.tasks.map((item) => {
      item.isCompleted = item.id === id ? !item.isCompleted : item.isCompleted;
      return item;
    });
  }

  async handleAdd(task: Task) {
    console.log(task);
    const newTask = await this.repo.create(task);
    this.tasks.push(newTask);
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
