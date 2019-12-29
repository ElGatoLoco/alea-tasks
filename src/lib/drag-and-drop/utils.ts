type MoveElementToIndex = <T>(array: T[], from: number, to: number) => T[];
export const moveElementToIndex: MoveElementToIndex = (array, from, to) => {
  const copy = [...array];
  if (to > copy.length) {
    to = copy.length - 1;
  }
  copy.splice(to, 0, copy.splice(from, 1)[0]);

  return copy;
};
