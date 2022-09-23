import MintModal from './MintModal';
import { useState, FC } from 'react';
import Image from 'next/image';
import { Center } from '@mantine/core';
import MetaMaskModal from './MetaMaskModal';
import coinMachine from '../public/images/coin-exchange.png';

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
      <button onClick={handleClick}>
        <Image
          priority
          alt="Coin Slot Machine"
          src={coinMachine}
          width={900}
          height={900}
        />
      </button>
    </Center>
  );
};

export default CoinMachine;
