import type { ApiRepository } from '../data/api.repository';
import type { Task } from '../models/task';
import { AddTask } from './add.task';
import { Component } from './component';

// TEMP import './tasks.list.css';

export class TasksList extends Component {
  tasks: Task[];

  constructor(selector: string, public repo: ApiRepository<Task>) {
    super(selector);
    this.tasks = [];
    void this.handleLoad();
  }

  render(): void {
    super.cleanHtml();
    this.template = this.createTemplate();
    super.render();
    new AddTask('div.add-tasks', this.handleAdd.bind(this));
    this.element.querySelectorAll('i.button').forEach((item) => {
      item.addEventListener('click', this.handleDelete.bind(this));
    });
    this.element.querySelectorAll('input').forEach((item) => {
      item.addEventListener('change', this.handleChange.bind(this));
    });
  }

  async handleLoad(): Promise<void> {
    try {
      this.tasks = await this.repo.getAll();
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
    }

    this.render();
    console.log('TaskList', this.element);
  }

  async handleDelete(event: Event): Promise<void> {
    const element = event.target as HTMLSpanElement;
    const id = element.dataset.id!;
    await this.repo.delete(id);
    this.tasks = this.tasks.filter((item) => Number(item.id) !== Number(id));
    this.render();
  }

  async handleChange(event: Event): Promise<void> {
    const element = event.target as HTMLSpanElement;
    const id = element.dataset.id!;
    console.log(element);
    const changedTask = this.tasks.find(
      (item) => Number(item.id) === Number(id)
    );
    if (!changedTask) return;
    await this.repo.update(id, {
      isCompleted: !changedTask.isCompleted,
    });

    this.tasks = this.tasks.map((item) => {
      item.isCompleted =
        Number(item.id) === Number(id) ? !item.isCompleted : item.isCompleted;
      return item;
    });
  }

  async handleAdd(task: Task): Promise<void> {
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

    <section class="tasks">
    <h2>Lista de tareas</h2>
    <div class="add-tasks"></div>
    <ul>${list}</ul>
    </section>`;
  }
}
