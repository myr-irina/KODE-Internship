import React from 'react';
import { styled } from '@shared/ui/theme';
import { View } from 'react-native';
import { Typography } from '../../typography';

const imageSize = 88;

const Avatar = styled.Image`
  width: ${() => imageSize}px;
  height: ${() => imageSize}px;
  border-radius: ${() => imageSize / 2};
`;

const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
`;

const UserName = styled(Typography)`
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-top: ${({ theme }) => theme.spacing(0.5)}px;
  text-align: center;
`;

export type TProfileInfo = {
  uri: string;
  userName: string;
  phone: string;
};

export const ProfileInfo = ({ uri, userName, phone }: TProfileInfo) => (
  <Wrapper>
    <Avatar source={{ uri }} />
    <UserName variant="subtitle">{userName}</UserName>
    <Typography variant="caption2">{phone}</Typography>
  </Wrapper>
);
