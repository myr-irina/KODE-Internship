import { ComponentProps, Fragment } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';

import { PaymentByPhoneItem } from '../../molecules/payment-by-phone-item';

type TPaymentByPhoneItem = ComponentProps<typeof PaymentByPhoneItem>;

export type TPaymenByPhonetList = {
  items: TPaymentByPhoneItem[];
};

export const PaymentByPhonetList = ({ items }: TPaymenByPhonetList) => (
  // <FlatList
  //   keyExtractor={item => item.title}
  //   data={items}
  //   renderItem={({ item }) => <PaymentByPhoneItem {...item} />}
  // />

  <>
    {items.map((item, title) => (
      <Fragment key={title}>
        <PaymentByPhoneItem {...item} />
      </Fragment>
    ))}
  </>
);
