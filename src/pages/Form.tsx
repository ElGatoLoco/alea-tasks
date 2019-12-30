import React, { useState } from 'react';
import { JuggernautForm, JuggernautFormField } from '../lib/form';
import { JuggernautFormWrapper } from '../lib/form/styles';

const Form: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    email: 'example@alea.com',
    age: 30,
    name: 'John Doe',
    phone: {
      ext: '00387',
      number: '65/123-456',
    },
  });
  const onSubmit = (formData: typeof userInfo): void => {
    console.log(formData);
    setUserInfo(formData);
  };
  return (
    <JuggernautFormWrapper>
      <JuggernautForm initialValues={userInfo} onSubmit={onSubmit}>
        <JuggernautFormField type="email" required={true} name="email" placeholder="your@email.com" />
        <JuggernautFormField type="number" name="age" />
        <JuggernautFormField type="text" required={true} name="name" />
        <JuggernautFormField type="text" name="phone.ext" />
        <JuggernautFormField type="text" name="phone.number" />
        <JuggernautFormField type="submit" value="Submit" />
      </JuggernautForm>
    </JuggernautFormWrapper>
  );
};
export default Form;
