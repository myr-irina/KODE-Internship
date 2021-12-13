import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { PaymentPage } from './payment-page';
import { Icons } from '../../atoms';
import { SafeAreaProvider } from 'react-native-safe-area-context';

storiesOf('ui/pages', module).add('profile-page', () => {
  return (
    <SafeAreaProvider>
      <PaymentPage
        header={'Платежи'}
        menu={{
          items: [
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
          ],
        }}
      />
    </SafeAreaProvider>
  );
});
