import { moveElementToIndex } from '../utils';

describe('Move element to index', () => {
  const arr: number[] = [11, 2, 61, 4, 3];

  test('it should move element with smaller index to appropriate place', () => {
    const newArr = moveElementToIndex(arr, 0, 3);
    expect(newArr).toEqual([2, 61, 4, 11, 3]);
  });

  test('it should move element with bigger index to appropriate place', () => {
    const newArr = moveElementToIndex(arr, 4, 2);
    expect(newArr).toEqual([11, 2, 3, 61, 4]);
  });

  test('it should leave the array as before if indexes are the same', () => {
    const newArr = moveElementToIndex(arr, 2, 2);
    expect(newArr).toEqual(arr);
  });
});
