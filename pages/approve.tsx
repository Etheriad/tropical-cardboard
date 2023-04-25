import { NextPage } from 'next';
import { useContracts } from '../hooks/useContracts';
// eslint-disable-next-line node/no-unpublished-import
import { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Title } from '@mantine/core';
import { Navigation } from '../common/Navigation';

const Approve: NextPage = () => {
  const { tropicalCardboard } = useContracts();

  useEffect(() => {
    if (!tropicalCardboard) {
      return;
    }

    (async () => {
      try {
        await tropicalCardboard!.setApprovalForAll(
          process.env.NEXT_PUBLIC_SODA_PHONES_ADDRESS!,
          true
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, [tropicalCardboard]);

  return (
    <div className="fixed h-screen w-screen">
      <Navigation selected="Soda Machine" />
      <Parallax pages={1}>
        <ParallaxLayer
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/7.svg)'
          }}
        >
          {/* Add rotate to flip over text */}
          <Container className="flex flex-col items-center justify-center h-screen">
            <Title order={1} align="center" color="blue">
              You&apos;re approved! You can now exchange your coin for a soda
              phone
            </Title>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Approve;
