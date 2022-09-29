import MintModal from './MintModal';
import { useState, FC } from 'react';
import Image from 'next/image';
import { Center, Container } from '@mantine/core';
import { MetaMaskModal } from '../../common/Modals';
import coinMachine from '../../public/images/coin-exchange.png';

declare let window: any;

const CoinMachine: FC = () => {
  const [isMetaMaskModalOpened, setIsMetaMaskModalOpened] =
    useState<boolean>(false);
  const [isMintModalOpened, setIsMintModalOpened] = useState<boolean>(false);

  const handleClick = () => {
    if (!window?.ethereum) {
      setIsMetaMaskModalOpened(true);
    } else {
      setIsMintModalOpened(true);
    }
  };

  return (
    <Center>
      <MintModal opened={isMintModalOpened} setOpened={setIsMintModalOpened} />
      <MetaMaskModal
        opened={isMetaMaskModalOpened}
        setOpened={setIsMetaMaskModalOpened}
      />
      <Container size="md" className="relative block">
        <Image
          onClick={handleClick}
          className="cursor-pointer"
          priority
          alt="Coin Slot Machine"
          src={coinMachine}
        />
      </Container>
    </Center>
  );
};

export default CoinMachine;
