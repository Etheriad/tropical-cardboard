import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';
import sodaMachine from '../public/images/soda-machine.png';

const SodaMachine: FC = () => {
  return (
    <>
      <Stack>
        <Center>
          <Image
            priority
            alt="Soda Machine"
            src={sodaMachine}
            width={900}
            height={900}
          />
        </Center>
      </Stack>
    </>
  );
};

export default SodaMachine;
