import { NextPage } from 'next';
import { useContracts } from '../hooks/useContracts';
// eslint-disable-next-line node/no-unpublished-import
import { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Title } from '@mantine/core';
import { Navigation } from '../common/Navigation';
import { connectWallet } from '../common/util/connectWallet';
import { coordinatesToFileName } from '../components/SodaPhones/coordinatesUtil';
import { alertError } from '../common/Alerts/alertUtil';

const Approve: NextPage = () => {
  const { sodaPhones, signer } = useContracts();

  useEffect(() => {
    if (!sodaPhones || !signer) {
      return;
    }

    (async () => {
      try {
        await connectWallet();
      } catch (e) {
        console.error(e);
        return;
      }

      const coordinates = window.location.search.split('?coordinates=').pop();

      if (!coordinates) {
        alertError('Invalid Input');
        return;
      }

      if (!coordinatesToFileName(coordinates)) {
        alertError('Invalid Input');
        return;
      }

      const coordinatesToMint = coordinatesToFileName(coordinates);

      try {
        const addr = await signer!.getAddress();
        const result = await sodaPhones!.payToMint(addr, coordinatesToMint);
        await result.wait();
      } catch (error) {
        console.error(error);
      }
    })();
  }, [sodaPhones, signer]);

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
              Enjoy your soda!
            </Title>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Approve;
