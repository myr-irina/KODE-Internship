import { ComponentProps, Fragment } from 'react';

import { PaymentItem } from '../../molecules';

type TPaymentItemProps = ComponentProps<typeof PaymentItem>;

export type TPaymentList = {
  items: TPaymentItemProps[];
};

export const PaymentList = ({ items }: TPaymentList) => (
  <>
    {items.map((item, index) => (
      <Fragment key={index}>
        <PaymentItem {...item} />
      </Fragment>
    ))}
  </>
);
