import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ReactNode, useContext } from 'react';

import { styled } from '@shared/ui/theme';

const Flex1 = styled.View`
  flex: 1;
  align-items: center;
`;

const Wrapper = styled(Flex1)<{ bottom: number; top: number }>`
  padding-bottom: ${({ theme, bottom }) => bottom + theme.spacing(8)}px;
`;

export type TProfileTemplate = {
  profileInfo: ReactNode;
  menu: ReactNode;
};

export function ProfileTemplate({ profileInfo, menu }: TProfileTemplate) {
  const { bottom, top } = useSafeAreaInsets();

  return (
    <Wrapper bottom={bottom} top={top}>
      <Flex1 />
      {profileInfo}
      <Flex1 />
      {menu}
      <Flex1 />
    </Wrapper>
  );
}
