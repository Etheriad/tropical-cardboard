import { Center, Text, Card, Group, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';

const MeetTheTeam: NextPage = () => {
  return (
    <Stack>
      <Center>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Center>
            <Card.Section
              style={{
                position: 'relative',
                width: '100px',
                height: '100px'
              }}
            >
              <Image src={'/images/rekt.gif'} layout="fill" alt="Rekt Guy" />
            </Card.Section>
          </Center>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Etheriad</Text>
            <Text> Hey there, Im Etheriad. I'm here to learn and build. Ive always been curious and love tinkering with things to learn how they work.
              I first learned about Bitcoin in 2013. I wanted to figure out how to mine it, but a friend told me it wasnt really worht it because it would cost
              about the same in electricity as I would make mining and it was complicated for someone who didnt know much about computers and programming.
              Bitcoin was around $100 usd. In 2017 I rediscovered cryptocurencies after hearing about a project network that used the same technology as bitcoin,
              but instead of just tranferring ballences, you could create computer programs. It was called Ethereum. I thought that sounded like an impcatful
              project and learned how to buy some when it was around $300 usd. THe price jumped a few months later and I happily sold what I had to pay for some 
              travel. The technology was young, and I figured it would take years for engineers to create meaningful programs on this world computer network. 
              In May of 2021 I heard about NFTs and did some exploring about how things had develpoed on the Ethereum network. I bought back in after having sold
              all my Ether in 2017 and went to opensea to check it out. I didnt see much that impressed me and after spending $30 usd in GWEI or gas fees to transfer
              a free NFT to my wallet, I decided things were progressing, but the technology wasnt there yet. Then in October of 2021, I hear about some NFTs that were
              selling at Christies auction house. I watched the auction live, and realized after many years of watching from the sidelines, I needed to dive in and 
              learn as much as I could. This has led me on a wild ride of spending lots of time reading, and lots of time talking with different projects and their
              communities in discord. Some of my favorite people can be found in the following projects. Curio Cards, VeeDAO, Big Head Club, Fyat Lux, and Phoenixes
              by habbit nest.
          </Group>
          <Text size="sm" color="dimmed">
            Etheriad Text here
          </Text>
        </Card>
      </Center>
      <Center>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Center>
            <Card.Section
              style={{
                position: 'relative',
                width: '100px',
                height: '100px'
              }}
            >
              <Image src={'/images/rekt.gif'} layout="fill" alt="Rekt Guy" />
            </Card.Section>
          </Center>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Rekt Boi</Text>
          </Group>
          <Text size="sm" color="dimmed">
            New to the Web3.0 space, Rekt Boi is still trying to get his wits
            about him.
          </Text>
        </Card>
      </Center>
    </Stack>
  );
};

export default MeetTheTeam;
