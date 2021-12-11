import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../typography';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  padding: ${({ theme }) => theme.spacing(1)}px;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const Title = styled(Typography)`
  font-size: 11px;
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
    <Title variant="body20">{title}</Title>
  </Wrapper>
);
