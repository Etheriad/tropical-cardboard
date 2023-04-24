import { Button } from '@mantine/core';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { FC } from 'react';
import { useContracts } from '../../hooks/useContracts';
import { connectWallet } from '../../common/util/connectWallet';
import { isMobile } from 'react-device-detect';
import { useDetectProvider } from '../../hooks/useDetectProvider';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: any;
  }
}

const TropicalCardboardMint: FC = () => {
  const { provider } = useDetectProvider();
  const { tropicalCardboard, signer } = useContracts();
  const mintToken = async () => {
    if (isMobile && !provider) {
      window.location.replace(
        process.env.NEXT_PUBLIC_DEEP_LINK || 'https://www.tropicalcardboard.com'
      );
    } else {
      try {
        await connectWallet();
      } catch (e) {
        console.error(e);
        return;
      }
    }

    if (!tropicalCardboard || !signer) return;
    const addr = await signer.getAddress();

    const result = await tropicalCardboard.payToMint(addr, 0, 1, '0x', {
      value: ethers.utils.parseEther('0.0025')
    });

    await result.wait();
  };

  return <Button onClick={mintToken}>Mint!</Button>;
};

export default TropicalCardboardMint;
