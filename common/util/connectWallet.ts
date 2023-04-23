import detectEthereumProvider from '@metamask/detect-provider';
// eslint-disable-next-line node/no-unpublished-import
import { ethers } from 'ethers';

export const connectWallet = async () => {
  const provider = await detectEthereumProvider();

  const web3Provider = new ethers.providers.Web3Provider(
    provider as ethers.providers.ExternalProvider
  );

  const ethAccounts = await web3Provider.send('eth_accounts', []);

  if (!ethAccounts?.length) {
    await web3Provider.send('eth_requestAccounts', []);
  }
};
