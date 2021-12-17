import { storiesOf } from '@storybook/react-native';

import { PaymentByPhonetList } from './payment-by-phone-list';
import { Icons } from '../../atoms';

storiesOf('ui/organisms', module).add('payment-by-phone-list', () => {
  return (
    <PaymentByPhonetList
      items={[
        {
          title: 'МТС',
          icon: <Icons.Settings />,          
        },
        {
          title: 'Мегафон',
          icon: <Icons.Moon />,          
        },
        {
          title: 'Beeline',
          icon: <Icons.Phone />,          
        },
        {
          title: 'Beeline',
          icon: <Icons.Phone />,          
        },
        {
          title: 'Beeline',
          icon: <Icons.Phone />,          
        },
        {
          title: 'Beeline',
          icon: <Icons.Phone />,          
        },
      ]}
    />
  );
});
