import { Center, Stack } from '@mantine/core';
import { FC } from 'react';
import CoinMachine from '../components/CoinMachine';
import ViewCoin from '../components/ViewCoin';

const CoinExchange: FC = () => {
  return (
    <>
      <Stack>
        <Center>
          <ViewCoin />
        </Center>
        <Center>
          <CoinMachine />
        </Center>
      </Stack>
    </>
  );
};

export default CoinExchange;
