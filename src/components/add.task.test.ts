/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { AddTask } from './add.task';

describe('Given the component AddTask', () => {
  const mockHandle = jest.fn();

  document.body.innerHTML = '<slot></slot>';
  new AddTask('slot', mockHandle);
  const form = screen.getByRole('form');
  test('it should be in the document', () => {
    expect(form).toBeInTheDocument();
  });

  test('user should complete the form', async () => {
    const inputs = screen.getAllByRole('textbox');
    const mockTaskTitle = 'New Task';
    await userEvent.type(inputs[0], mockTaskTitle);
    expect(inputs[0]).toHaveValue(mockTaskTitle);
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(mockHandle).toHaveBeenCalled();
  });
});
