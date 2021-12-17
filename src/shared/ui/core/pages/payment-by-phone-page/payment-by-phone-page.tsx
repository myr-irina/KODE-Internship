import { useContext, useState } from 'react';
import { Typography } from '../../typography';
import { PaymentByPhoneTemplate } from '../../templates';
import { PaymentList } from '../../organisms';

import { Image } from 'react-native';
import { InputItem } from '../../molecules';
import { Icons } from '../../atoms';
import { PaymentByPhonetList } from '../../organisms/payment-by-phone-list';
import { Category } from '@shared/data/appdata';

export type TPaymentByPhonePage = {
  header: string;
  category: Category;
  navigate: Function;
};

export const PaymentByPhonePage = ({ header, category, navigate }: TPaymentByPhonePage) => {

  const [searchQuery, setSearchQuery] = useState('');

  // const filteredCategory = categories.category.services.filter((service) => {
  //   service.service_name.toLowerCasae().includes(searchQuery.toLowrerCase())
  // })

  return (
    <PaymentByPhoneTemplate
      header={<Typography variant="title">{header}</Typography>}
      // search={<InputItem icon={<Icons.SearchIcon />} onChangeText={(text: string)=> setSearchQuery{text}} value={searchQuery}/>}
      search={<InputItem icon={<Icons.SearchIcon />} />}
      menu={
        <PaymentByPhonetList
          items={category.services.map(service => ({
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
