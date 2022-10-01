import { Button } from '@mantine/core';
import { useState, useEffect, FC } from 'react';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: any;
  }
}

const ConnectWalletButton: FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const accounts = await window.ethereum?.request({
        method: 'eth_accounts'
      });
      if (accounts.length === 0) {
        setIsConnected(false);
      } else {
        setIsConnected(true);
      }
    } catch (error) {
      setIsConnected(false);
    }
  };

  const connect = async () => {
    try {
      await window.ethereum?.request({
        method: 'eth_requestAccounts'
      });
      setIsConnected(true);
    } catch (error) {
      console.error('Rejected');
      setIsConnected(false);
    }
  };

  if (isConnected) {
    return <Button color="green">Connected</Button>;
  }

  return <Button onClick={connect}>Connect Wallet</Button>;
};
export default ConnectWalletButton;
