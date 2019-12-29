import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './ui/global-style';

import fonts from './config/fonts';
import theme from './config/theme';
import { DragArea, DragItem } from './lib/drag-and-drop';

import { Paragraph } from './ui/text';

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

const App = () => {
  const [items, setNewItems] = useState(exampleUsers);

  useEffect(() => {
    fonts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DragArea<User> items={items} onChange={setNewItems}>
        {items.map((user, index) => (
          <DragItem key={user.id} index={index}>
            <Paragraph>{user.name}</Paragraph>
            <Paragraph>{user.email}</Paragraph>
          </DragItem>
        ))}
      </DragArea>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
