import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../typography';
import { TouchableOpacity } from 'react-native';

const Wrapper = styled(TouchableOpacity)`
  padding: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: row;
  align-items: center;
`;

const Title = styled(Typography)`
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  flex: 1;
`;

const HSpacing = styled.View<{ width?: number }>`
  width: ${({ theme, width }) => width ?? theme.spacing(1)}px;
`;

const Right = styled.View`
  margin-left: auto;
`;

export type TMenuItem = {
  left: ReactNode;
  title: string;
  right?: ReactNode;
  onPress: () => void;
};

export const MenuItem = ({ left, title, right, onPress }: TMenuItem) => (
  <Wrapper onPress={onPress} activeOpacity={0.7}>
    {left}
    <Title variant="body20">{title}</Title>
    <HSpacing />
    <Right>{right}</Right>
  </Wrapper>
);
