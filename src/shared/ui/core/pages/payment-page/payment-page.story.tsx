import { storiesOf } from '@storybook/react-native';
import { PaymentPage } from './payment-page';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDataContext } from '@shared/data/appdata';

storiesOf('ui/pages', module).add('payment-page', () => {
  return (
    <SafeAreaProvider>
      <AppDataContext.Provider
        value={{
          category: [
            {
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
            },
            {
              category_id: '2',
              category_name: 'ЖКХ',
              category_icon:
                'https://github.com/kode-frontend/files/raw/main/1_JKH.png',
              services: [],
            },
            {
              category_id: '3',
              category_name: 'Интернет',
              category_icon:
                'https://github.com/kode-frontend/files/raw/main/1_Internet.png',
              services: [],
            },
          ],
        }}
      >
        <PaymentPage header={'Платежи'} navigate={() => {}} />
      </AppDataContext.Provider>
    </SafeAreaProvider>
  );
});
