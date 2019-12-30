import React, { useContext } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DragContext from '../DragContext';
import { ExtendedDragEvent } from '../global-types';

describe('DragContext test suite', () => {
  const Consumer = () => {
    const { onDrop, setDraggedItemIndex } = useContext(DragContext);
    onDrop(('onDrop' as unknown) as ExtendedDragEvent<HTMLDivElement>);
    setDraggedItemIndex(7);

    return <></>;
  };

  test('Consumer invokes callbacks successfully', () => {
    let draggedItemIndex: number = -1;
    let drop = null;
    const setDraggedItemIndex = (x: number) => (draggedItemIndex = x);
    const onDrop = (e: ExtendedDragEvent<HTMLDivElement>) => (drop = e);
    render(
      <DragContext.Provider value={{ onDrop, setDraggedItemIndex }}>
        <Consumer />
      </DragContext.Provider>,
    );

    expect(draggedItemIndex).toEqual(7);
    expect(drop).toEqual('onDrop');
  });
});
