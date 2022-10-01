import { Center, Text, Card, Group, Button } from '@mantine/core';
import { FC } from 'react';

interface ButtonProps {
  href: string;
  text: string;
}

interface ParallaxCardProps {
  title?: string;
  text: string;
  button?: ButtonProps;
}

const ParallaxCardGenerator: FC<ParallaxCardProps> = ({
  title,
  text,
  button
}) => {
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      {title ? (
        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{title}</Text>
        </Group>
      ) : null}
      <Text align="center" size="sm" color="dimmed">
        {text}
      </Text>
      {button ? (
        <Center>
          <Button
            mt="md"
            radius="md"
            color="orange"
            component="a"
            target="_blank"
            href={button.href}
          >
            {button.text}
          </Button>
        </Center>
      ) : null}
    </Card>
  );
};

export default ParallaxCardGenerator;
