import { ComponentProps, useContext } from 'react';
import { Typography } from '../../typography';
import { PaymentTemplate } from '../../templates';
import { PaymentList } from '../../organisms';
import { AppDataContext } from '@app/ui/app';
import { Image } from 'react-native';

export type TPaymentPage = {
  header: string;
};

export const PaymentPage = ({ header }: TPaymentPage) => {
  const categories = useContext(AppDataContext);
  return (
    <PaymentTemplate
      header={<Typography>{header}</Typography>}
      menu={
        <PaymentList
          items={categories.category.map(category => ({
            icon: (
              <Image              
                source={{
                  uri: category.category_icon,
                }}
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
