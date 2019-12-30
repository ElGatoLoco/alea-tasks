import React from 'react';

import { useModal } from '../lib/modal';
import { Close, TriggerButton } from '../lib/modal/styles';
import Box from '../ui/Box';
import { H3, Paragraph } from '../ui/text';

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

export default () => {
  return (
    <Box>
      <H3>For more details about our security policy, click on the button bellow.</H3>
      <Modal />
    </Box>
  );
};
