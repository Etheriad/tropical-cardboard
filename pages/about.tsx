import { Card, Center, Container, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { Navigation } from '../common/Navigation';

const About: NextPage = () => {
  return (
    <>
      <Navigation selected="About" />
      <Center className="mt-5">
        <Container>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Text>
              This project is meant to help educate anyone who is interested in
              cryptocurrencies, blockchains, the MetaVerse, and Web3. This is a
              huge space that spans many different topics that often include
              cutting edge technology that can seem complex. Its an exciting
              place to explore and learn. I&apos;ve always learned best with
              hands on experience. In cryptocurrencies, that means putting some
              skin in the game since it has to do primarily with finances and
              money. This can make it a much more difficult place to explore
              since there are lots of barriers to be able to even participate.
              How do you even buy cryptocurrency? How do you make sure you arent
              hacked, or more often, scammed out of your valuable assets? There
              can be a lot of fear, uncertainty, and doubt. My aim with this
              project is to cut down some of those barriers to entry and give
              you a starting place to begin learning about these complex topics
              in a safe and simple way. I picked an activity I think most people are
              familiar with, buying a soda out of a soda machine, but doing it
              all with cyrptocurrencies and digital assets of the MetaVerse,
              NFTs.
            </Text>
          </Card>
        </Container>
      </Center>
    </>
  );
};

export default About;
