import { Group, Modal } from '@mantine/core';
import { FC, Dispatch, SetStateAction } from 'react';
import SodaPhonesMint from './SodaPhonesMint';

interface ModalState {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const MintModal: FC<ModalState> = ({ opened, setOpened }) => {
  return (
    <Modal
      classNames={{
        title: 'text-center w-auto'
      }}
      centered
      opened={opened}
      onClose={() => setOpened(false)}
      title="One Tropical Cardboard Token"
    >
      <Group className="flex flex-row gap-4 justify-center">
        <SodaPhonesMint />
      </Group>
    </Modal>
  );
};

export default MintModal;
