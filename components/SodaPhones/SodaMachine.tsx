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
    <Container className="mt-5 mb-10 sm:w-1/4 sm:h-1/4">
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
      />
    </Container>
  );
};

export default SodaMachine;
