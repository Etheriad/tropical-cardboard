import { Alert, Anchor, Button, Center, Container, Modal } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { Dispatch, FC, SetStateAction } from 'react';

const ALERT_TITLE = 'Oops!';
const ALERT_CONTENT =
  'You need MetaMask to access this site. Follow the link to install 👇🏼';
const META_MASK_LINK = 'https://metamask.io/download.html';

interface ModalState {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const MetaMaskModal: FC<ModalState> = ({ opened, setOpened }) => {
  return (
    <Modal
      classNames={{
        title: 'text-center w-auto'
      }}
      centered
      opened={opened}
      onClose={() => setOpened(false)}
      title={ALERT_TITLE}
    >
      <Center>
        <Container>
          <Alert icon={<IconAlertCircle size={16} />} color="red">
            {ALERT_CONTENT}
            <br />
            <Center>
              <Button
                variant="outline"
                color="red"
                className="hover:bg-red-100"
              >
                <Anchor target="_blank" href={META_MASK_LINK} color="red">
                  Meta Mask
                </Anchor>
              </Button>
            </Center>
          </Alert>
        </Container>
      </Center>
    </Modal>
  );
};

export default MetaMaskModal;
