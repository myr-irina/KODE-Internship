import React, { ReactNode } from 'react';
import { Text, View } from 'react-native';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../typography';

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2)}px;
  flex-direction: row;
  align-items: center;
`;

export type TMenuItem = {
  left: ReactNode;
  title: string;
  right?: ReactNode;
  onPress: () => void;
};

export const MenuItem = ({ left, title, right, onPress }: TMenuItem) => (
  <Wrapper>
    {left}
    <Typography variant="body20">{title}</Typography>
  </Wrapper>
);
