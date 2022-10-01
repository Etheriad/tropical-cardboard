import { Center, Text, Card, Group, Container } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ProfileCardGeneratorProps {
  title: string;
  text: string;
  image: string | StaticImageData;
  alt: string;
}

const ProfileCardGenerator: FC<ProfileCardGeneratorProps> = ({
  title,
  text,
  image,
  alt
}) => {
  return (
    <Container>
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
              <Image src={image} layout="fill" alt={alt} />
            </Card.Section>
          </Center>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{title}</Text>
          </Group>
          <Text size="sm" color="dimmed">
            {text}
          </Text>
        </Card>
      </Center>
    </Container>
  );
};

export default ProfileCardGenerator;
