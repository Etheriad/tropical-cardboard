import detectEthereumProvider from '@metamask/detect-provider';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

export const useWalletConnection = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await detectEthereumProvider();

      const web3Provider = new ethers.providers.Web3Provider(
        provider as ethers.providers.ExternalProvider
      );

      const ethAccounts = await web3Provider.send('eth_accounts', []);

      if (ethAccounts?.length) {
        setIsWalletConnected(true);
      }
    })();
  }, []);

  return { isWalletConnected };
};
