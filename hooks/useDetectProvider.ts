import detectEthereumProvider from '@metamask/detect-provider';
import { useCallback, useEffect, useState } from 'react';

export const useDetectProvider = () => {
  const [provider, setProvider] = useState<any>(null);

  const detectProvider = useCallback(async () => {
    const detectedProvider = await detectEthereumProvider();
    setProvider(detectedProvider);
  }, []);

  useEffect(() => {
    detectProvider();
  }, [detectProvider]);

  return { provider };
};
