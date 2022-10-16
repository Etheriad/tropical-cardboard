import { Container } from '@mantine/core';
import { FC, useState } from 'react';
import Image from 'next/image';
import sodaMachine from '../../public/images/soda-machine.png';
import SodaPhonesMintModal from './SodaPhonesMintModal';
import { MetaMaskModal } from '../../common/Modals';

const SodaMachine: FC = () => {
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
    <Container className="relative h-full w-1/2 mt-7 pr-0 ml-0 mr-0">
      <SodaPhonesMintModal
        opened={isMintModalOpened}
        setOpened={setIsMintModalOpened}
      />
      <MetaMaskModal
        opened={isMetaMaskModalOpened}
        setOpened={setIsMetaMaskModalOpened}
      />
      <Image
        priority
        onClick={handleClick}
        className="cursor-pointer"
        alt="Soda Machine"
        src={sodaMachine}
        layout="fill"
        objectFit="contain"
      />
    </Container>
  );
};

export default SodaMachine;
