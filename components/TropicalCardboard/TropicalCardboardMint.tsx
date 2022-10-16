import { Button } from '@mantine/core';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { FC } from 'react';
import { useContracts } from '../../hooks/useContracts';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: any;
  }
}

const TropicalCardboardMint: FC = () => {
  const { tropicalCardboard, signer } = useContracts();
  const mintToken = async () => {
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
