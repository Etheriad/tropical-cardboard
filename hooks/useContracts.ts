import { useState, useEffect } from 'react';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import SodaPhones from '../artifacts/contracts/SodaPhones.sol/SodaPhones.json';
import TropicalCardboardCoin from '../artifacts/contracts/TropicalCardboardCoin.sol/TropicalCardboardCoin.json';
import { SODA_PHONES, TROPICAL_CARDBOARD_COIN } from '../constants/contracts';

type Signer = ethers.providers.JsonRpcSigner | null;
type Contract = ethers.Contract | null;

const useContracts = () => {
  const [signer, setSigner] = useState<Signer>(null);
  const [sodaPhones, setSodaPhones] = useState<Contract>(null);
  const [tropicalCardboard, setTropicalCardboard] = useState<Contract>(null);

  useEffect(() => {
    try {
      // SodaPhones;
      const contractAddress = SODA_PHONES.address;
      const provider = new ethers.providers.Web3Provider(window.ethereum!);

      // get the end user
      const currSigner = provider.getSigner();
      // get the smart contract
      const sodaPhonesContract = new ethers.Contract(
        contractAddress,
        SodaPhones.abi,
        currSigner
      );

      // TropicalCardboardCoin
      const tropicalContractAddress = TROPICAL_CARDBOARD_COIN.address;

      // get the smart contract
      const tropicalContract = new ethers.Contract(
        tropicalContractAddress,
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
