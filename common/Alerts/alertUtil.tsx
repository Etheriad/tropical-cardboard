import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';

const alertTransactionSuccess = (hash: string) => {
  showNotification({
    icon: <IconCheck />,
    color: 'green',
    title: 'Success',
    message: `Here's your transaction hash: ${hash}`
  });
};

const alertError = (message: string = 'Something went wrong') => {
  showNotification({
    icon: <IconX />,
    color: 'red',
    title: 'Oops!',
    message
  });
};

export { alertTransactionSuccess, alertError };
