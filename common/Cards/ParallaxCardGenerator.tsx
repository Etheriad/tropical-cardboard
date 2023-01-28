import { Center, Text, Card, Group, Button } from '@mantine/core';
import { FC } from 'react';

interface ButtonProps {
  href: string;
  text: string;
}

interface ParallaxCardProps {
  title?: string;
  text: string;
  buttons?: ButtonProps[];
}

const ParallaxCardGenerator: FC<ParallaxCardProps> = ({
  title,
  text,
  buttons
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
      {buttons
        ? buttons.map((button) => (
            <Center key={button.text}>
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
          ))
        : null}
    </Card>
  );
};

export default ParallaxCardGenerator;
