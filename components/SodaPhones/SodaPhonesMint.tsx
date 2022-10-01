import { Button, Container, Group, TextInput } from '@mantine/core';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { FC } from 'react';
import SodaPhones from '../../artifacts/contracts/SodaPhones.sol/SodaPhones.json';
import { SODA_PHONES } from '../../constants/contracts';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: any;
  }
}

const SodaPhonesMint: FC = () => {
  const mintSodaPhone = async () => {
    // SodaPhones;
    const contractAddress = SODA_PHONES.address;
    const provider = new ethers.providers.Web3Provider(window.ethereum!);
    // get the end user
    const signer = provider.getSigner();
    // get the smart contract
    const sodaPhonesContract = new ethers.Contract(
      contractAddress,
      SodaPhones.abi,
      signer
    );
    const addr = await signer.getAddress();
    const result = await sodaPhonesContract.payToMint(addr, 0, 1, '0x', {
      value: ethers.utils.parseEther('0.0025')
    });
    await result.wait();
  };

  return (
    <Container>
      <Group>
        <TextInput placeholder="Choose your SodaPhone" />
        <Button disabled={true} onClick={() => mintSodaPhone()}>
          Mint!
        </Button>
      </Group>
    </Container>
  );
};

export default SodaPhonesMint;
