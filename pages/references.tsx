import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Navigation from '../components/Navigation';

const References: NextPage = () => {
  return (
    <>
      <Navigation selected="References" />
      <Center>
        <Text>References</Text>
      </Center>
    </>
  );
};

export default References;
