import { showNotification, updateNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';

const alertTransactionSuccess = (hash: string) => {
  showNotification({
    icon: <IconCheck />,
    color: 'green',
    title: 'Success',
    message: `Here's your transaction hash: ${hash}`
  });
};

const alertError = (message?: string) => {
  if (message) {
    message = parseError(message);
  }

  showNotification({
    icon: <IconX />,
    color: 'red',
    title: 'Oops!',
    message
  });
};

const alertLoadIntoSuccess = async (transaction: any) => {
  showNotification({
    id: 'mint-transaction',
    loading: true,
    title: 'Transaction Pending',
    message: transaction.hash,
    autoClose: false,
    disallowClose: true
  });

  try {
    await transaction.wait();

    updateNotification({
      id: 'mint-transaction',
      color: 'green',
      title: 'Success',
      message: `Here's your transaction hash: ${transaction.hash}`,
      icon: <IconCheck size={16} />
    });
  } catch (error) {
    updateNotification({
      id: 'mint-transaction',
      icon: <IconX />,
      color: 'red',
      title: 'Oops!',
      message: 'Something went wrong'
    });
  }
};

const parseError = (message: string) => {
  switch (message) {
    case 'execution reverted: ERC1155: caller is not owner or not approved':
      return 'Soda Phones must be approved to spend your tokens!';
    case 'MetaMask Tx Signature: User denied transaction signature.':
      return 'Transaction Rejected';
    default:
      return 'Something went wrong';
  }
};

export { alertTransactionSuccess, alertError, alertLoadIntoSuccess };
