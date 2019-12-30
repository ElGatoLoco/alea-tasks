import styled from 'styled-components';

export const ModalWrapper = styled.div`
  margin: 2em auto;
  border: 2px solid #000;
  font-size: 2em;
  display: grid;
  justify-self: center;
  align-self: center;
  width: 60vw;
  height: auto;
  z-index: 999999;
  background-color: white;
  padding: 2rem;
  font-size: 20px;
  position: relative;
  background-color: ${({ theme }) => theme.font.color.grey};
`;

export const Close = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 24px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
`;

export const ModalButton = styled.button`
  display: block;
`;

export const TriggerButton = styled.button`
  margin: 35px;
  padding: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.font.color.darkBlue};
  font-family: ${({ theme }) => theme.font.family.regular};
  color: ${({ theme }) => theme.font.color.light};
  font-size: ${({ theme }) => theme.font.size.huge};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;
