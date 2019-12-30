import React, { ChangeEvent, ComponentProps, createContext, FC, FormEvent, useState } from 'react';

import { JuggernautFormStyled } from './styles';
import { ChangeHandler, FieldValue, FormData } from './types';
import { getValue, setValue } from './utils';

type JuggernautForm = {
  handleFieldChange: (fieldName: string) => ChangeHandler;
  getFieldValue: (fieldName: string) => FieldValue;
};

type JuggernautFormProps = {
  initialValues: FormData;
  onSubmit: Function;
};

export const JuggernautFormContext = createContext({} as JuggernautForm);
export const JuggernautForm: FC<ComponentProps<FC> & JuggernautFormProps> = ({ initialValues, onSubmit, children }) => {
  const [formData, setFormData] = useState<FormData>({ ...initialValues });

  const submitForm = (e: FormEvent): void => {
    e.preventDefault();
    return onSubmit(formData);
  };

  const handleFieldChange = (field: string): ChangeHandler => ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...setValue(field, value, formData) });
  };

  const getFieldValue = (fieldName: string): FieldValue => {
    return getValue(fieldName, formData);
  };

  return (
    <JuggernautFormContext.Provider
      value={{
        handleFieldChange,
        getFieldValue,
      }}
    >
      <JuggernautFormStyled onSubmit={submitForm}>{children}</JuggernautFormStyled>
    </JuggernautFormContext.Provider>
  );
};
