import { Button } from '@mantine/core';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { FC } from 'react';
import TropicalCardboardCoin from '../../artifacts/contracts/TropicalCardboardCoin.sol/TropicalCardboardCoin.json';
import { TROPICAL_CARDBOARD_COIN } from '../../constants/contracts';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}

const TropicalCardboardMint: FC = () => {
  const mintToken = async () => {
    // TropicalCardboardCoin
    const contractAddress = TROPICAL_CARDBOARD_COIN.address;

    const provider = new ethers.providers.Web3Provider(window.ethereum!);

    // get the end user
    const signer = provider.getSigner();

    // get the smart contract
    const tropicalContract = new ethers.Contract(
      contractAddress,
      TropicalCardboardCoin.abi,
      signer
    );

    const addr = await signer.getAddress();

    const result = await tropicalContract.payToMint(addr, 0, 1, '0x', {
      value: ethers.utils.parseEther('0.0025')
    });

    await result.wait();
  };

  return (
    <Button variant="outline" onClick={() => mintToken()}>
      Mint!
    </Button>
  );
};

export default TropicalCardboardMint;