import { storiesOf } from '@storybook/react-native';

import { PaymentList } from './payment-list';
import { Icons } from '../../atoms';

storiesOf('ui/organisms', module).add('payment-list', () => {
  return (
    <PaymentList
      items={[
        {
          title: 'Мобильная связь',
          icon: <Icons.Settings />,
          onPress: () => null,
        },
        {
          title: 'ЖКХ',
          icon: <Icons.Moon />,
          onPress: () => null,
        },
        {
          title: 'Интернет',
          icon: <Icons.Phone />,
          onPress: () => null,
        },
      ]}
    />
  );
});
