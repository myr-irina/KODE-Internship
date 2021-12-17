import { useContext } from 'react';
import { Typography } from '../../typography';
import { PaymentByPhoneTemplate } from '../../templates';
import { PaymentList } from '../../organisms';
import { AppDataContext } from '@app/ui/app';
import { Image } from 'react-native';
import { InputItem } from '../../molecules';
import { Icons } from '../../atoms';
import { PaymentByPhonetList } from '../../organisms/payment-by-phone-list';

export type TPaymentByPhonePage = {
  header: string;
};

export const PaymentByPhonePage = ({ header }: TPaymentByPhonePage) => {
  const categories = useContext(AppDataContext);
  return (
    <PaymentByPhoneTemplate
      header={<Typography variant="title">{header}</Typography>}
      search={<InputItem icon={<Icons.SearchIcon />} />}
      menu={
        <PaymentByPhonetList
          items={categories.category.map(category => ({
            icon: (
              <Image
                source={{
                  uri: category.services,
                }}
                style={{ width: 40, height: 40 }}
              />
            ),
            onPress: () => {},
            title: category.category_name,
          }))}
        />
      }
    />
  );
};
