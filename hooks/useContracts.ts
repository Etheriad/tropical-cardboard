import { useState, useEffect } from 'react';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import SodaPhones from '../artifacts/contracts/SodaPhones.sol/SodaPhones.json';
import TropicalCardboardCoin from '../artifacts/contracts/TropicalCardboardCoin.sol/TropicalCardboardCoin.json';
import detectEthereumProvider from '@metamask/detect-provider';

type Signer = ethers.providers.JsonRpcSigner | null;
type Contract = ethers.Contract | null;

const useContracts = () => {
  const [signer, setSigner] = useState<Signer>(null);
  const [sodaPhones, setSodaPhones] = useState<Contract>(null);
  const [tropicalCardboard, setTropicalCardboard] = useState<Contract>(null);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        const provider = await detectEthereumProvider();

        // SodaPhones;
        const sodaPhonesAddress = process.env.NEXT_PUBLIC_SODA_PHONES_ADDRESS!;
        const web3Provider = new ethers.providers.Web3Provider(
          provider as ethers.providers.ExternalProvider
        );

        // get the end user
        const currSigner = web3Provider.getSigner();
        // get the smart contract
        const sodaPhonesContract = new ethers.Contract(
          sodaPhonesAddress,
          SodaPhones.abi,
          currSigner
        );

        // TropicalCardboardCoin
        const tropicalCardboardAddress =
          process.env.NEXT_PUBLIC_TROPICAL_CARDBOARD_COIN_ADDRESS!;

        // get the smart contract
        const tropicalContract = new ethers.Contract(
          tropicalCardboardAddress,
          TropicalCardboardCoin.abi,
          currSigner
        );

        setSigner(currSigner);
        setSodaPhones(sodaPhonesContract);
        setTropicalCardboard(tropicalContract);
      } catch (error) {
        console.error(error);
      }
    };

    connectWallet();
  }, []);

  return { signer, sodaPhones, tropicalCardboard };
};

export { useContracts };
