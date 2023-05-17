import { Task } from '../models/task';

export const getMockTasks = (): Task[] => [
  new Task('Task1', 'Pepe'),
  new Task('Task2', 'Luisa'),
  new Task('Task3', 'Ernesto'),
];
