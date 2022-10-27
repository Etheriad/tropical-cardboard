import { Button, Container, Group, TextInput } from '@mantine/core';
import { FC, useEffect, useState, useCallback } from 'react';
import { useContracts } from '../../hooks/useContracts';
import { coordinatesToFileName } from './coordinatesUtil';
import {
  alertError,
  alertLoadIntoSuccess,
  alertTransactionSuccess
} from '../../common/Alerts/alertUtil';

interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

const SodaPhonesMint: FC = () => {
  const { signer, sodaPhones, tropicalCardboard } = useContracts();
  const [coordinates, setCoordinates] = useState('');
  const [isMintDisabled, setIsMintDisabled] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const checkApproval = useCallback(async () => {
    if (!tropicalCardboard || !signer) return;
    const resp = await tropicalCardboard.isApprovedForAll(
      await signer.getAddress(),
      process.env.NEXT_PUBLIC_SODA_PHONES_ADDRESS!
    );

    setIsApproved(resp);
  }, [signer, tropicalCardboard]);

  useEffect(() => {
    if (coordinatesToFileName(coordinates) || !isApproved) {
      setIsMintDisabled(false);
    } else {
      setIsMintDisabled(true);
    }
  }, [coordinates, isApproved]);

  useEffect(() => {
    checkApproval();
  }, [checkApproval]);

  const approve = async () => {
    if (!tropicalCardboard) return;

    try {
      const res = await tropicalCardboard!.setApprovalForAll(
        process.env.NEXT_PUBLIC_SODA_PHONES_ADDRESS!,
        true
      );
      alertTransactionSuccess(res.hash);
      setIsApproved(true);
    } catch (error) {
      console.error(error);
      alertError();
      setIsApproved(false);
    }
  };

  const mintSodaPhone = async () => {
    if (!coordinatesToFileName(coordinates)) {
      console.error('Invalid Input');
      return;
    }

    const coordinatesToMint = coordinatesToFileName(coordinates);

    try {
      const addr = await signer!.getAddress();
      const result = await sodaPhones!.payToMint(addr, coordinatesToMint);

      alertLoadIntoSuccess(result);
    } catch (error) {
      if (error?.error) {
        const typedError = error.error as ProviderRpcError;
        alertError(typedError.message);
      } else {
        alertError(error.message);
      }
    }
  };

  return (
    <Container>
      <Group>
        <TextInput
          value={coordinates}
          onChange={(e) => setCoordinates(e.target.value)}
          placeholder="Choose your SodaPhone"
          error={isMintDisabled && coordinates ? 'Invalid Input' : null}
        />
        <Button disabled={isMintDisabled} onClick={mintSodaPhone}>
          Mint!
        </Button>
        {!isApproved && <Button onClick={approve}>Approve Soda Phones</Button>}
      </Group>
    </Container>
  );
};

export default SodaPhonesMint;
