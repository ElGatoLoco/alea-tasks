import React, { FC, useContext } from 'react';
import { JuggernautFormContext } from './JuggernautForm';
import { JuggernautFormInput } from './styles';

type JuggernautFormFieldProps = {
  name?: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
};

export const JuggernautFormField: FC<JuggernautFormFieldProps> = ({
  type,
  name = '',
  required = false,
  placeholder = '',
  value,
}) => {
  const { getFieldValue, handleFieldChange } = useContext(JuggernautFormContext);

  return (
    <JuggernautFormInput
      type={type}
      required={required}
      placeholder={placeholder}
      onChange={handleFieldChange(name)}
      value={value || getFieldValue(name)}
    />
  );
};
