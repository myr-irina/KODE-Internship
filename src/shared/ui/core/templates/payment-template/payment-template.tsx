import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode, useContext } from 'react';

import { styled } from '@shared/ui/theme';

import { AppDataContext } from '@app/ui/app';

const Flex1 = styled.View`
  flex: 1;
`;

const Wrapper = styled(Flex1)<{ bottom: number; top: number }>`
  padding-top: ${({ top }) => top}px;
  padding-bottom: ${({ theme, bottom }) => bottom + theme.spacing(1)}px;
`;

export type TPaymentTemplate = {
  header: string;
  menu: ReactNode;
};

export const PaymentTemplate = ({ header, menu }: TPaymentTemplate) => {
  const { bottom, top } = useSafeAreaInsets();

  const appData = useContext(AppDataContext);

  return (
    <Wrapper bottom={bottom} top={top}>
      <Flex1 />
      {header}
      <Flex1 />
      {menu}
    </Wrapper>
  );
};
