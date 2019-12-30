import { highlightItemIfDraggedOver, reorderItems } from '../DragArea/handlers';
import { moveElementToIndex } from '../utils';

describe('Highlight item if dragged over it', () => {
  test('it should highlight when dragging element with lower index', () => {
    let x;
    highlightItemIfDraggedOver(0, 2, n => (x = n));
    expect(x).toEqual(2);
  });

  test('it should highlight when dragging element with higher index', () => {
    let x;
    highlightItemIfDraggedOver(4, 2, n => (x = n));
    expect(x).toEqual(2);
  });

  test("it shouldn't highlight if dragged outside drop area", () => {
    let x;
    highlightItemIfDraggedOver(4, NaN, n => (x = n));
    expect(x).toEqual(-1);
  });

  test("it shouldn't highlight if dragged over itself", () => {
    let x;
    highlightItemIfDraggedOver(4, 4, n => (x = n));
    expect(x).toEqual(-1);
  });
});

describe('Reorder items on drop', () => {
  const arr = [11, 2, 61, 4, 3];
  test('it should reorder items when moving element with lower index', () => {
    let x = arr;
    reorderItems(
      arr,
      0,
      2,
      _items => (x = moveElementToIndex(arr, 0, 2)),
      () => {},
    );
    expect(x).toEqual([2, 61, 11, 4, 3]);
  });

  test('it should reorder items when moving element with higher index', () => {
    let x = arr;
    reorderItems(
      arr,
      4,
      2,
      _items => (x = moveElementToIndex(arr, 4, 2)),
      () => {},
    );
    expect(x).toEqual([11, 2, 3, 61, 4]);
  });

  test("it shouldn't reorder when moved outside of drop area", () => {
    let x = arr;
    reorderItems(
      arr,
      4,
      NaN,
      _items => (x = moveElementToIndex(arr, 4, NaN)),
      () => {},
    );
    expect(x).toEqual(arr);
  });
});
