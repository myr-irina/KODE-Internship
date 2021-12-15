import { ComponentProps, Fragment } from 'react';
import { FlatList } from 'react-native';

import { PaymentItem } from '../../molecules';

type TPaymentItemProps = ComponentProps<typeof PaymentItem>;

export type TPaymentList = {
  items: TPaymentItemProps[];
};

export const PaymentList = ({ items }: TPaymentList) => (
  // <FlatList
  //   keyExtractor={item => item.title}
  //   data={items}
  //   renderItem={({ item }) => <PaymentItem {...item} />}
  // />

  <>
    {items.map((item, title) => (
      <Fragment key={title}>
        <PaymentItem {...item} />
      </Fragment>
    ))}
  </>
);
