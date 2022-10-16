import { Card, Table } from '@mantine/core';
import { ReactElement, FC, useEffect, useState } from 'react';
import { useSodaPhoneSupply } from '../../hooks/useSodaPhoneSupply';

type Rows = ReactElement[] | null;

const SodaPhonesStock: FC = () => {
  const { sodaPhonesSupply } = useSodaPhoneSupply();
  const [rows, setRows] = useState<Rows>(null);

  useEffect(() => {
    if (!sodaPhonesSupply) return;

    const populatedRows: Rows = [];

    sodaPhonesSupply.forEach((value: number, key: string) => {
      const remaining = 12 - value;
      const isSoldOut = remaining === 0;
      populatedRows.push(
        <tr key={key} className={`${isSoldOut ? 'text-red-600' : null}`}>
          <td>{key}</td>
          <td>{remaining} left!</td>
        </tr>
      );
    });

    setRows(populatedRows);
  }, [sodaPhonesSupply]);

  return (
    <Card className="mt-5 ml-2">
      <Table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Supply</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Card>
  );
};

export default SodaPhonesStock;
