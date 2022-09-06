import { Center, Stack, Title } from '@mantine/core';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Center>
      <Stack>
        <Title order={1} align="center" color="violet">
          Welcome to the
        </Title>
        <Title order={1} weight={700} italic align="center" color="violet">
          MetaVerse!
        </Title>
        <Title order={1} align="center" color="violet">
          Grab a soda
        </Title>
      </Stack>
    </Center>
  );
};

export default Home;
