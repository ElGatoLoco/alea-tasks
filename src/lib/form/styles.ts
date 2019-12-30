import styled from 'styled-components';

export const JuggernautFormWrapper = styled.div`
  text-align: center;
  width: 100vw;
  display: grid;
  align-content: center;
  background-color: #282c34;
`;

export const JuggernautFormStyled = styled.form`
  display: grid;
  grid-gap: 2rem;
  padding: 2rem;
  margin: 2rem;
  background-color: transparent;
  border-radius: 1rem;
  border: 2px solid lightgray;
`;

export const JuggernautFormInput = styled.input`
  background-color: #282c34;
  color: white;
  border-radius: 2rem;
  outline: none !important;
  padding: 1rem 2rem;
  font-size: 18px;
`;
