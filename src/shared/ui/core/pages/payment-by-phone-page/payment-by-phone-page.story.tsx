import { storiesOf } from '@storybook/react-native';
import { PaymentByPhonePage } from './payment-by-phone-page';
import { SafeAreaProvider } from 'react-native-safe-area-context';

storiesOf('ui/pages', module).add('payment-by-phone-page', () => {
  return (
    <SafeAreaProvider>
      <PaymentByPhonePage
        header={'Мобильная связь'}
        category={{
          category_id: '1',
          category_name: 'Мобильная связь',
          category_icon:
            'https://github.com/kode-frontend/files/raw/main/1_mobile.png',
          services: [
            {
              service_id: '11',
              service_name: 'МТС',
              service_icon:
                'https://github.com/kode-frontend/files/raw/main/MTS.png',
            },
            {
              service_id: '12',
              service_name: 'МегаФон',
              service_icon:
                'https://github.com/kode-frontend/files/raw/main/megafon.png',
            },
            {
              service_id: '13',
              service_name: 'Beeline',
              service_icon:
                'https://github.com/kode-frontend/files/raw/main/beeline.png',
            },
            {
              service_id: '14',
              service_name: 'Tele2',
              service_icon:
                'https://github.com/kode-frontend/files/raw/main/tele2.png',
            },
            {
              service_id: '15',
              service_name: 'Kode Mobile',
              service_icon:
                'https://github.com/kode-frontend/files/raw/main/kode.png',
            },
          ],
        }}
        navigate={() => {}}
      />
    </SafeAreaProvider>
  );
});
