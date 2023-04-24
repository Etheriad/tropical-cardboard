import { NextPage } from 'next';
import { useContracts } from '../hooks/useContracts';
import { connectWallet } from '../common/util/connectWallet';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Container, Title } from '@mantine/core';
import { Navigation } from '../common/Navigation';

const TCCMint: NextPage = () => {
  const { tropicalCardboard, signer } = useContracts();

  useEffect(() => {
    if (!tropicalCardboard || !signer) {
      return;
    }

    (async () => {
      try {
        await connectWallet();
      } catch (e) {
        console.error(e);
        return;
      }

      if (!tropicalCardboard || !signer) return;
      const addr = await signer.getAddress();

      const result = await tropicalCardboard.payToMint(addr, 0, 1, '0x', {
        value: ethers.utils.parseEther('0.0025')
      });

      await result.wait();
    })();
  }, [signer, tropicalCardboard]);

  return (
    <div className="fixed h-screen w-screen">
      <Navigation selected="Coin Exchange" />
      <Parallax pages={1}>
        <ParallaxLayer
          style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(/backgrounds/5.svg)'
          }}
        >
          {/* Add rotate to flip over text */}
          <Container className="flex flex-col items-center justify-center h-screen">
            <Title order={1} align="center" color="blue">
              Enjoy your Coin!
            </Title>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default TCCMint;
