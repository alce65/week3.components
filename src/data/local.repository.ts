import { Task } from '../models/task';

const mockTasks = [
  new Task('Task1 en localStore', 'Pepe'),
  new Task('Task2 en localStore', 'Luisa'),
  new Task('Task3 en localStore', 'Ernesto'),
];

const storeName = 'Tasks';

export const getTasks = (): Task[] => {
  const stringData = localStorage.getItem(storeName);
  if (!stringData) {
    setTasks(mockTasks);
    return mockTasks;
  }

  return JSON.parse(stringData);
};

export const setTasks = (tasks: Task[]): void => {
  localStorage.setItem(storeName, JSON.stringify(tasks));
};

export const removeTasks = (): void => {
  localStorage.removeItem(storeName);
};
