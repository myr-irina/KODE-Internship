import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode, useContext } from 'react';
import { Typography } from '../../typography';
import { styled } from '@shared/ui/theme';

const Flex1 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Flex1)<{ bottom: number; top: number }>`
  padding-bottom: ${({ theme, bottom }) => bottom + theme.spacing(8)}px;
`;

export type TPaymentTemplate = {
  header: ReactNode;
  menu: ReactNode;
};

export const PaymentTemplate = ({ header, menu }: TPaymentTemplate) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Wrapper bottom={bottom} top={top}>
      {header}
      {menu}
    </Wrapper>
  );
};
