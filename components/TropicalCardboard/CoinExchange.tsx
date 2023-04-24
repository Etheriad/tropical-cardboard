import MintModal from './TCCMintModal';
import { useState, FC } from 'react';
import Image from 'next/image';
import { Container } from '@mantine/core';
import { MetaMaskModal } from '../../common/Modals';
import coinExchange from '../../public/images/coin-exchange.png';
import { useDetectProvider } from '../../hooks/useDetectProvider';
import { isMobile } from 'react-device-detect';

const CoinExchange: FC = () => {
  const [isMetaMaskModalOpened, setIsMetaMaskModalOpened] =
    useState<boolean>(false);
  const [isMintModalOpened, setIsMintModalOpened] = useState<boolean>(false);
  const { provider } = useDetectProvider();

  const handleClick = () => {
    if (!provider) {
      if (isMobile) {
        window.location.replace(process.env.NEXT_PUBLIC_DEEP_LINK!);
      } else {
        setIsMetaMaskModalOpened(true);
      }
    } else {
      setIsMintModalOpened(true);
    }
  };

  return (
    <Container className="relative sm:mt-5 h-3/4 w-3/4">
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
