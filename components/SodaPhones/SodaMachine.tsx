import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';
import sodaMachine from '../../public/images/soda-machine.png';

const SodaMachine: FC = () => {
  return (
    <>
      <Stack>
        <Center>
          <Image
            className="h-5"
            priority
            alt="Soda Machine"
            src={sodaMachine}
          />
        </Center>
      </Stack>
    </>
  );
};

export default SodaMachine;
