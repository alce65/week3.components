/* eslint-disable no-new */
// TEMP import { screen } from '@testing-library/dom';
// TEMP import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TasksList } from './tasks.list';

// PREV import { getTasks } from '../data/local.repository';
import type { ApiRepository } from '../data/api.repository';
import type { Task } from '../models/task';

// PREV jest.mock('../data/local.repository');

describe('Given the component TasksList', () => {
  // (getTasks as jest.Mock).mockReturnValue([{ id: '', isCompleted: false }]);

  const repo: ApiRepository<Task> = {
    getAll: jest.fn().mockResolvedValue([]),
  } as unknown as ApiRepository<Task>;
  document.body.innerHTML = '<slot></slot>';
  new TasksList('slot', repo);
  test('should ', () => {
    // PREV expect(getTasks).toHaveBeenCalled();
    expect(repo.getAll).toHaveBeenCalled();
  });
});
