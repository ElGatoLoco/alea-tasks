import { createContext } from 'react';
import { ExtendedDragEvent } from './global-types';

type DragContext = {
  setDraggedItemIndex: (item: number) => void;
  onDrop: (e: ExtendedDragEvent<HTMLDivElement>) => void;
};

export default createContext<DragContext>({} as DragContext);
