import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../../config/theme';
import DragArea from '../DragArea/DragArea';
import DragItem from '../DragItem/DragItem';

type User = {
  id: number;
  name: string;
  email: string;
};
const exampleUsers: User[] = [
  { id: 2, name: 'Jovica', email: 'jovica@gmail.com' },
  { id: 1, name: 'Milica', email: 'milica@hotmail.com' },
  { id: 3, name: 'Nemanja', email: 'nemanja@gmail.com' },
  { id: 4, name: 'Jovana', email: 'jovana@gmail.com' },
  { id: 5, name: 'Zoran', email: 'zoran@gmail.com' },
];

const getRenderedList = () =>
  render(
    <ThemeProvider theme={theme}>
      <DragArea<User> items={exampleUsers} onChange={_ => {}}>
        {exampleUsers.map((user, index) => (
          <DragItem key={user.id} index={index}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </DragItem>
        ))}
      </DragArea>
    </ThemeProvider>,
  );

describe('Render test suite', () => {
  getRenderedList();

  test('it should render users to the screen', () => {
    expect(screen.getByText('milica@hotmail.com')).toBeInTheDocument();
    expect(screen.getByText('Jovana')).toBeInTheDocument();
    expect(screen.getByText('zoran@gmail.com')).toBeInTheDocument();

    const elem = screen.getByText('zoran@gmail.com').parentElement;
    if (elem) {
      fireEvent.dragOver(elem);
      expect(elem).toHaveStyle('border-style: dashed');
    } else {
      throw new Error('Missing drag target from DOM');
    }

    expect(screen.getByText('Zoran').parentNode).toHaveAttribute('draggable');
    expect(screen.getByText('milica@hotmail.com').parentNode).toHaveAttribute('draggable');
    expect(screen.getByText('Nemanja').parentNode).toHaveAttribute('draggable');
  });
});
