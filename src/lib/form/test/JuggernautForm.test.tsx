import React from 'react';
import { JuggernautForm, JuggernautFormField } from '..';

import { render, screen, fireEvent } from '@testing-library/react';

test('Should render children', () => {
  render(
    <JuggernautForm initialValues={{}} onSubmit={() => {}}>
      <JuggernautFormField type={'text'} name={'test'} placeholder={'test'} />
    </JuggernautForm>,
  );
  const field: HTMLElement = screen.getByPlaceholderText('test');
  expect(field).toBeInTheDocument();
  expect(field).toHaveValue('');
});

test('Should set initial value', () => {
  const fakeFormData = { test: 'Test Value' };

  render(
    <JuggernautForm initialValues={fakeFormData} onSubmit={() => {}}>
      <JuggernautFormField type={'text'} name={'test'} placeholder={'test'} />
    </JuggernautForm>,
  );

  const field: HTMLElement = screen.getByPlaceholderText('test');
  expect(field).toBeInTheDocument();
  expect(field).toHaveValue(fakeFormData.test);
});

test('Should handle value change', () => {
  const fakeFormData = { test: 'Test Value' };
  const newTestValue = 'New Test Value';

  render(
    <JuggernautForm initialValues={fakeFormData} onSubmit={() => {}}>
      <JuggernautFormField type={'text'} name={'test'} placeholder={'test'} />
    </JuggernautForm>,
  );

  const field: HTMLElement = screen.getByPlaceholderText('test');
  fireEvent.change(field, { target: { value: newTestValue } });

  expect(field).toHaveValue(newTestValue);
});

test('Should show nested values', () => {
  const fakeFormData = { test: { nested: 'Test Nested Value' } };
  const nestedKey = 'test.nested';

  render(
    <JuggernautForm initialValues={fakeFormData} onSubmit={() => {}}>
      <JuggernautFormField type={'text'} name={nestedKey} placeholder={nestedKey} />
    </JuggernautForm>,
  );

  const field: HTMLElement = screen.getByPlaceholderText(nestedKey);
  expect(field).toHaveValue(fakeFormData.test.nested);
});

test('Should handle nested value change', () => {
  const fakeFormData = { test: { nested: 'Test Nested Value' } };
  const nestedKey = 'test.nested';
  const newNestedValue = 'New Test Nested Value';

  render(
    <JuggernautForm initialValues={fakeFormData} onSubmit={() => {}}>
      <JuggernautFormField type={'text'} name={nestedKey} placeholder={nestedKey} />
    </JuggernautForm>,
  );

  const field: HTMLElement = screen.getByPlaceholderText(nestedKey);
  fireEvent.change(field, { target: { value: newNestedValue } });

  expect(field).toHaveValue(newNestedValue);
});

test('Should submit form', () => {
  const fakeFormData = { test: { nested: 'Test Nested Value' }, test1: 'Test Field Value' };
  const nestedKey = 'test.nested';
  const test1Key = 'test1';

  const onSubmit = jest.fn();
  render(
    <JuggernautForm initialValues={fakeFormData} onSubmit={onSubmit}>
      <JuggernautFormField type={'text'} name={nestedKey} placeholder={nestedKey} />
      <JuggernautFormField type={'text'} name={test1Key} placeholder={test1Key} required={true} />
      <JuggernautFormField type={'submit'} value={'Submit'} placeholder={'submit'} />
    </JuggernautForm>,
  );

  const field: HTMLElement = screen.getByPlaceholderText('submit');
  fireEvent.click(field, {});

  expect(onSubmit).toBeCalledTimes(1);
  expect(onSubmit).toBeCalledWith(fakeFormData);
});

test('Should submit form with changed values, and initial values should not be mutated', () => {
  const initialFormData = { test: { nested: 10 }, test1: 'Test Field Value' }; // Object does not participate, just exist to check for possible mutations
  const fakeFormData = { test: { nested: 10 }, test1: 'Test Field Value' };
  const nestedKey = 'test.nested';
  const test1Key = 'test1';
  const newNestedValue = 20;
  const newFormData = { test: { nested: newNestedValue }, test1: 'Test Field Value' };

  const onSubmit = jest.fn();
  render(
    <JuggernautForm initialValues={fakeFormData} onSubmit={onSubmit}>
      <JuggernautFormField type={'number'} name={nestedKey} placeholder={nestedKey} />
      <JuggernautFormField type={'text'} name={test1Key} />
      <JuggernautFormField type={'submit'} value={'Submit'} placeholder={'submit'} />
    </JuggernautForm>,
  );

  const nestedField = screen.getByPlaceholderText(nestedKey);
  fireEvent.change(nestedField, { target: { value: newNestedValue } });

  const field: HTMLElement = screen.getByPlaceholderText('submit');
  fireEvent.click(field, {});

  expect(onSubmit).toBeCalledTimes(1);
  expect(initialFormData).toEqual(fakeFormData);
  expect(onSubmit).toBeCalledWith(newFormData);
});
