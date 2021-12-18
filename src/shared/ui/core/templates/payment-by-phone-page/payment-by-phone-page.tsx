import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode, useContext } from 'react';

import { styled } from '@shared/ui/theme';

const Flex1 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const Wrapper = styled(Flex1)<{ bottom: number; top: number }>`
  padding-bottom: ${({ theme, bottom }) => bottom + theme.spacing(8)}px;
`;

export type TPaymentByPhoneTemplate = {
  header: ReactNode;
  search: ReactNode;
  menu: ReactNode;
};

export const PaymentByPhoneTemplate = ({
  header,
  search,
  menu,
}: TPaymentByPhoneTemplate) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Wrapper bottom={bottom} top={top}>
      <Flex1 />
      {header}
      {search}
      <Flex1 />
      {menu}
      <Flex1 />
    </Wrapper>
  );
};
