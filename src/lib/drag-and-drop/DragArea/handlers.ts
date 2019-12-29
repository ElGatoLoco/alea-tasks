import { moveElementToIndex } from '../utils';

type HighlightItemIfDraggedOver = (draggedI: number, targetI: number, setterCallback: (index: number) => void) => void;
export const highlightItemIfDraggedOver: HighlightItemIfDraggedOver = (draggedI, targetI, setterCallback) => {
  if (isNaN(targetI) || targetI === draggedI) {
    return setterCallback(-1);
  }

  return setterCallback(targetI);
};

type ReorderItems = <T>(
  oldItems: T[],
  draggedI: number,
  targetI: number,
  updateItems: (items: T[]) => void,
  resetHighlight: () => void,
) => void;
export const reorderItems: ReorderItems = (oldItems, draggedI, targetI, updateItems, resetHighlight) => {
  if (isNaN(targetI) || draggedI === targetI) {
    return;
  }

  const newItems = moveElementToIndex(oldItems, draggedI, targetI);
  updateItems(newItems);
  resetHighlight();
};
