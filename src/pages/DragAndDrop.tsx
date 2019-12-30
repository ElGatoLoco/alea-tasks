import React, { useState } from 'react';
import { DragArea, DragItem } from '../lib/drag-and-drop';
import { Paragraph } from '../ui/text';

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

const DragAndDrop: React.FC<{}> = () => {
  const [items, setNewItems] = useState(exampleUsers);

  return (
    <DragArea<User> items={items} onChange={setNewItems}>
      {items.map((user, index) => (
        <DragItem key={user.id} index={index}>
          <Paragraph>{user.name}</Paragraph>
          <Paragraph>{user.email}</Paragraph>
        </DragItem>
      ))}
    </DragArea>
  );
};

export default DragAndDrop;
