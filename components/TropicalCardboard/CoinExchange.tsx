import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import CoinMachine from './CoinMachine';

const CoinExchange: FC = () => {
  return (
    <>
      <Stack>
        <Center>
          <CoinMachine />
        </Center>
      </Stack>
    </>
  );
};

export default CoinExchange;