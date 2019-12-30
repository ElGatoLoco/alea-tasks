import { FieldValue, FormData } from '../types';

export const setValue = (nestedPath: string | string[], value: FieldValue, object: FormData): FormData => {
  const obj = JSON.parse(JSON.stringify(object));

  let path = Array.isArray(nestedPath) ? nestedPath : nestedPath.split('.');
  path
    .slice(0, -1)
    .reduce(
      (a: any, c: string, i: number) =>
        Object(a[c]) === a[c] ? a[c] : (a[c] = Math.abs(Number(path[i + 1])) >> 0 === +path[i + 1] ? [] : {}),
      obj,
    )[path[path.length - 1]] = Number.isNaN(Number(value)) ? value : Number(value);
  return obj;
};
