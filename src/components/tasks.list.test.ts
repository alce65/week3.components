/* eslint-disable no-new */
// TEMP import { screen } from '@testing-library/dom';
// TEMP import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TasksList } from './tasks.list';

import { getTasks } from '../data/local.repository';

jest.mock('../data/local.repository');

describe('Given the component TasksList', () => {
  (getTasks as jest.Mock).mockReturnValue([{ id: '', isCompleted: false }]);

  document.body.innerHTML = '<slot></slot>';
  new TasksList('slot');
  test('should ', () => {
    expect(getTasks).toHaveBeenCalled();
  });
});
