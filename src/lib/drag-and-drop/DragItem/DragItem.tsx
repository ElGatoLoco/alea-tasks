import React, { ReactNode, useContext } from 'react';

import DragContext from '../DragContext';
import { DragItemContainer } from '../global-types';
import DefaultContainer from './DefaultDragContainer';

type DragItem = React.FC<{
  index: number;
  isDraggedOver?: boolean;
  Container?: DragItemContainer;
  children: ReactNode | ReactNode[];
}>;
const DragItem: DragItem = ({ index, children, Container = DefaultContainer, isDraggedOver = false }) => {
  const { setDraggedItemIndex } = useContext(DragContext);

  return (
    <Container
      draggable={true}
      onDragStart={() => setDraggedItemIndex(index)}
      highlight={isDraggedOver}
      data-current-index={index.toString()}
    >
      {children}
    </Container>
  );
};

export default DragItem;
