import { storiesOf } from '@storybook/react-native';

import { PaymentItem } from './payment-item';
import { text } from '@storybook/addon-knobs';

import { Icons } from '../../atoms';

storiesOf('ui/molecules', module).add('payment-item', () => {
  return (
    <PaymentItem
      icon={<Icons.Settings />}
      title={text('title', 'Платежи')}
      onPress={() => null}
    />
  );
});
