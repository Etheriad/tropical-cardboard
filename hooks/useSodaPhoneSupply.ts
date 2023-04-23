import { useState, useEffect, useCallback } from 'react';
import { coordinatesToPathMap } from '../components/SodaPhones/coordinatesUtil';
import { useContracts } from './useContracts';
import { useWalletConnection } from './useWalletConnection';

type SodaPhonesSupply = any;

const useSodaPhoneSupply = () => {
  const { isWalletConnected } = useWalletConnection();
  const { sodaPhones } = useContracts();
  const [sodaPhonesSupply, setSodaPhonesSupply] =
    useState<SodaPhonesSupply | null>(null);

  const getSupply = useCallback(async () => {
    if (!sodaPhones || !isWalletConnected) return;
    const values = Array.from(coordinatesToPathMap.values());

    const promises = values.map(async (path) => {
      try {
        const supply = await sodaPhones!.getContentSupply(path);
        return supply;
      } catch (error) {
        console.error(error);
      }
    });

    const stock = await Promise.all(promises);

    const supply = new Map<string, number>([
      ['A1', stock[0]],
      ['A2', stock[1]],
      ['A3', stock[2]],
      ['A4', stock[3]],
      ['B1', stock[4]],
      ['B2', stock[5]],
      ['B3', stock[6]],
      ['B4', stock[7]],
      ['C1', stock[8]],
      ['C2', stock[9]],
      ['C3', stock[10]],
      ['C4', stock[11]]
    ]);
    setSodaPhonesSupply(supply);
  }, [sodaPhones, isWalletConnected]);

  useEffect(() => {
    getSupply();
  }, [getSupply]);

  return { sodaPhonesSupply };
};

export { useSodaPhoneSupply };
