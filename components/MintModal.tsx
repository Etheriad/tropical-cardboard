import { Button, Group, Modal } from '@mantine/core';
import { FC, Dispatch, SetStateAction } from 'react';
import TropicalCardboardMint from './TropicalCardboardMint';
import WalletBalance from './WalletBalance';

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
      title="0.0025 Ethereum"
    >
      <Group className="flex flex-row gap-4 justify-center">
        <TropicalCardboardMint />
        <Button variant="outline">Connect Wallet</Button>
      </Group>
      <WalletBalance />
    </Modal>
  );
};

export default MintModal;
