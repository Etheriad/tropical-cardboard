import { useState, useEffect } from 'react';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import SodaPhones from '../artifacts/contracts/SodaPhones.sol/SodaPhones.json';
import TropicalCardboardCoin from '../artifacts/contracts/TropicalCardboardCoin.sol/TropicalCardboardCoin.json';

type Signer = ethers.providers.JsonRpcSigner | null;
type Contract = ethers.Contract | null;

const useContracts = () => {
  const [signer, setSigner] = useState<Signer>(null);
  const [sodaPhones, setSodaPhones] = useState<Contract>(null);
  const [tropicalCardboard, setTropicalCardboard] = useState<Contract>(null);

  useEffect(() => {
    try {
      // SodaPhones;
      const sodaPhonesAddress = process.env.NEXT_PUBLIC_SODA_PHONES_ADDRESS!;
      const provider = new ethers.providers.Web3Provider(window.ethereum!);

      // get the end user
      const currSigner = provider.getSigner();
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
  }, []);

  return { signer, sodaPhones, tropicalCardboard };
};

export { useContracts };
