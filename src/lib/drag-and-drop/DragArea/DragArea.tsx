import React, { useState } from 'react';

import { highlightItemIfDraggedOver, reorderItems } from './handlers';
import { DragArea as DragAreaT, SortableItem } from './types';
import DragContext from '../DragContext';
import { ExtendedDragEvent } from '../global-types';
import Box from '../../../ui/Box';

const DragArea: DragAreaT = ({ items, onChange, children }) => {
  const [onIndex, setOnIndex] = useState(-1);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number>(-1);

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement<SortableItem>(child)) {
        return child;
      }

      return React.cloneElement(child, { id: index, isDraggedOver: index === onIndex });
    });
  };

  type OnDragOver = (e: ExtendedDragEvent<HTMLDivElement>) => void;
  const onDragOver: OnDragOver = e => {
    e.preventDefault();
    const draggedOverIndex = Number(e.target.dataset.currentIndex);
    highlightItemIfDraggedOver(draggedItemIndex, draggedOverIndex, setOnIndex);
  };

  type OnDrop = (e: ExtendedDragEvent<HTMLDivElement>) => void;
  const onDrop: OnDrop = ({ target: { dataset } }) => {
    const droppedOnIndex = Number(dataset.currentIndex);
    const resetHighlight = () => setOnIndex(-1);
    reorderItems(items, draggedItemIndex, droppedOnIndex, onChange, resetHighlight);
  };

  return (
    <DragContext.Provider value={{ onDrop, setDraggedItemIndex }}>
      <Box onDrop={onDrop} onDragOver={onDragOver}>
        {renderChildren()}
      </Box>
    </DragContext.Provider>
  );
};

export default DragArea;
