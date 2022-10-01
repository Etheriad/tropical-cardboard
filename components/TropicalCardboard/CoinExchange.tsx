import MintModal from './TCCMintModal';
import { useState, FC } from 'react';
import Image from 'next/image';
import { Container } from '@mantine/core';
import { MetaMaskModal } from '../../common/Modals';
import coinExchange from '../../public/images/coin-exchange.png';

declare let window: any;

const CoinExchange: FC = () => {
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
    <Container className="relative h-full w-full">
      <MintModal opened={isMintModalOpened} setOpened={setIsMintModalOpened} />
      <MetaMaskModal
        opened={isMetaMaskModalOpened}
        setOpened={setIsMetaMaskModalOpened}
      />
      <Image
        priority
        onClick={handleClick}
        className="cursor-pointer"
        alt="Coin Slot Machine"
        src={coinExchange}
        layout="fill"
        objectFit="contain"
      />
    </Container>
  );
};

export default CoinExchange;
