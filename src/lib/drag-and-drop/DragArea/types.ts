import { ReactNode } from 'react';

export type SortableItem = { id: number; isDraggedOver?: boolean };
type DragAreaProps<T> = {
  items: T[];
  onChange: (items: T[]) => void;
  children: ReactNode[];
};
export type DragArea = <T extends SortableItem>(props: DragAreaProps<T>) => JSX.Element;
