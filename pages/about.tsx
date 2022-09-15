import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';
import Navigation from '../components/Navigation';

const About: NextPage = () => {
  return (
    <>
      <Navigation selected="About" />
      <Center>
        <Text>About</Text>
      </Center>
    </>
  );
};

export default About;
