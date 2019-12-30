import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

// import Modal from '../Modal';
import { ThemeProvider } from 'styled-components';
import theme from '../../../config/theme';
import Box from '../../../ui/Box';
import { H3, Paragraph } from '../../../ui/text';
import { Close, TriggerButton } from '../styles';
import { useModal } from '../useModal';

const Modal = () => {
  const { ModalBody, close } = useModal(<TriggerButton>Click to open modal</TriggerButton>);

  return (
    <ModalBody>
      <Close onClick={close}>
        Close <b>X</b>
      </Close>
      <Box>
        <H3>Security policy</H3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque purus turpis, posuere eu consectetur ac,
          scelerisque et mi. Quisque non suscipit lorem, vel vulputate nibh. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Sed condimentum massa eros. Aliquam at varius diam. Phasellus posuere nulla sed nibh
          venenatis imperdiet. Quisque vitae purus ornare, interdum nisl vel, consectetur libero. Donec viverra a tellus
          at gravida.
        </Paragraph>
      </Box>
    </ModalBody>
  );
};

const renderModal = () =>
  render(
    <ThemeProvider theme={theme}>
      <Box>
        <H3>For more details about our security policy, click on the button bellow.</H3>
        <Modal />
      </Box>
    </ThemeProvider>,
  );

test('Should render trigger', () => {
  renderModal();

  const field: HTMLElement = screen.getByText('Click to open modal');
  expect(field).toBeInTheDocument();
});

test('Should render modal data when trigger is clicked', () => {
  renderModal();

  fireEvent.click(screen.getByText('Click to open modal'));

  const field: HTMLElement = screen.getByText('Security policy');
  expect(field).toBeInTheDocument();
});

test('Should close modal when Close button is clicked', () => {
  renderModal();

  fireEvent.click(screen.getByText('Click to open modal'));

  const fieldInModal: HTMLElement = screen.getByText('Security policy');
  expect(fieldInModal).toBeInTheDocument();

  fireEvent.click(screen.getByText('Close'));

  expect(screen.getByText('Click to open modal')).toBeInTheDocument();
});
