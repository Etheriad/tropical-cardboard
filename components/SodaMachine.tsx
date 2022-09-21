import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import Image from 'next/image';

const SodaMachine: FC = () => {
  return (
    <>
      <Stack>
        <Center>
          <Image
            alt="Soda Machine"
            src={'/images/soda-machine.png'}
            width={1000}
            height={1000}
          ></Image>
        </Center>
      </Stack>
    </>
  );
};

export default SodaMachine;
