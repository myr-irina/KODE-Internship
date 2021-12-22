import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode } from 'react';

import { styled } from '@shared/ui/theme';
import { Typography } from '../../typography';

const Flex1 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

const Flex2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled(Flex1)<{ bottom: number; top: number }>`
  padding-bottom: ${({ theme, bottom }) => bottom + theme.spacing(2)}px;
`;

const Title = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(6)}px;
`;

export type TPaymentByPhoneTemplate = {
  header: ReactNode;
  button: ReactNode;
  search: ReactNode;
  menu: ReactNode;
};

export const PaymentByPhoneTemplate = ({
  header,
  button,
  search,
  menu,
}: TPaymentByPhoneTemplate) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Wrapper bottom={bottom} top={top}>
      <Flex2>
        {button}
        {header}
      </Flex2>
      {search}
      <Flex1 />
      {menu}
      <Flex1 />
    </Wrapper>
  );
};
