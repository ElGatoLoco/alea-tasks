import { ChangeEvent } from 'react';

export type ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;

export type FieldValue = string | number | string[] | undefined;

export type FormData = {
  [key: string]: FieldValue | FormData;
};
