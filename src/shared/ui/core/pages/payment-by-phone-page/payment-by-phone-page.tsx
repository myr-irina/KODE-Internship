import { useMemo, useState } from 'react';
import { Typography } from '../../typography';
import { PaymentByPhoneTemplate } from '../../templates';
import { Image } from 'react-native';
import { InputItem } from '../../molecules';
import { Icons } from '../../atoms';
import { PaymentByPhonetList } from '../../organisms/payment-by-phone-list';
import { Category, Service } from '@shared/data/appdata';
import { Button } from 'react-native';

export type TPaymentByPhonePage = {
  category: Category;
  navigation: { navigate: Function; goBack: Function };
};

export const PaymentByPhonePage = ({
  category,
  navigation,
}: TPaymentByPhonePage) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices =
    searchQuery === ''
      ? category.services
      : category.services.filter(service => {
          console.log(service.service_name, searchQuery);
          return service.service_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });

  const pressHandler = (service: Service) => {
    navigation.navigate('paymentdetails', service);
  };

  return (
    <PaymentByPhoneTemplate
      button={<Button title="Back" onPress={() => navigation.goBack()} />}
      header={
        <Typography variant="body20">{category.category_name}</Typography>
      }
      search={
        <InputItem
          icon={<Icons.SearchIcon />}
          onChangeText={(text: string) => {
            console.log(text);
            setSearchQuery(text);
          }}
          value={searchQuery}
        />
      }
      // search={<InputItem icon={<Icons.SearchIcon />} />}
      menu={
        <PaymentByPhonetList
          items={filteredServices.map(service => ({
            icon: (
              <Image
                source={{
                  uri: service.service_icon,
                }}
                style={{ width: 40, height: 40 }}
              />
            ),
            onPress: () => {},
            title: service.service_name,
          }))}
        />
      }
    />
  );
};
