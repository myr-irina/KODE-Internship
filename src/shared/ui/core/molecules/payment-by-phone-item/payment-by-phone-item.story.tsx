import { storiesOf } from '@storybook/react-native';

import { PaymentByPhoneItem } from './payment-by-phone-item';
import { text } from '@storybook/addon-knobs';

import { Icons } from '../../atoms';

storiesOf('ui/molecules', module).add('payment-by-phone-item', () => {
  return (
    <PaymentByPhoneItem
      icon={<Icons.SearchIcon />}
      title={text('title', 'Мобильная связь')}
      onPress={() => null}
    />
  );
});
