import React, { ReactNode } from 'react';

import { styled } from '@shared/ui/theme';
import { Typography } from '../../typography';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  padding: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export type TabBarItem = {
  icon: ReactNode;
  title: string;
  onPress: () => void;
};

export const TabBarItem = ({ icon, title, onPress }: TabBarItem) => (
  <Wrapper onPress={onPress} activeOpacity={0.7}>
    {icon}
    <Typography variant="caption2">{title}</Typography>
  </Wrapper>
);
