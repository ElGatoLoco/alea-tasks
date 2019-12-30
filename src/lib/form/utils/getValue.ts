import { FieldValue, FormData } from '../types';

export const getValue = (path: string, object: FormData): FieldValue => {
  return path.split('.').reduce((obj: any, key: string) => obj && obj[key], object);
};
