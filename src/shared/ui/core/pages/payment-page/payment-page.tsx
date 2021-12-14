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
      header={<Typography variant="title">{header}</Typography>}
      menu={
        <PaymentList
          items={categories.category.map(category => ({
            icon: (
              <Image
                source={{
                  uri: category.category_icon,
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
