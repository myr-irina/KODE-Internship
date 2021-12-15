import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode, useContext } from 'react';
import { Typography } from '../../typography';
import { styled } from '@shared/ui/theme';

// import { AppDataContext } from '@app/ui/app';

const Flex1 = styled.View`
  flex: 0.8;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Flex1)<{ bottom: number; top: number }>`
  padding-top: ${({ top }) => top}px;
  padding-bottom: ${({ theme, bottom }) => bottom + theme.spacing(1)}px;
`;

export type TPaymentTemplate = {
  header: ReactNode;
  menu: ReactNode;
};

export const PaymentTemplate = ({ header, menu }: TPaymentTemplate) => {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Wrapper bottom={bottom} top={top}>
      <Flex1 />
      {header}
      <Flex1 />
      {menu}
      <Flex1 />
    </Wrapper>
  );
};
