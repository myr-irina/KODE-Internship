import { ComponentProps } from 'react';

import { PaymentTemplate } from '../../templates';
import { PaymentList } from '../../organisms';

export type TPaymentPage = {
  header: string;
  menu: ComponentProps<typeof PaymentList>;
};

export const PaymentPage = ({ header, menu }: TPaymentPage) => (
  <PaymentTemplate header={header} menu={<PaymentList {...menu} />} />
);
