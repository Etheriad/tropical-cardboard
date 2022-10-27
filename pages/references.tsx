import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { Navigation } from '../common/Navigation';

const References: NextPage = () => {
  return (
    <>
      <Navigation selected="References" />
      <Center className="mt-5">
        <Text>
          I will fill out this page with some of my favorite projects personally
          as well as links to helpful educational content.
        </Text>
      </Center>
    </>
  );
};

export default References;
