import React, { ReactNode, useState } from 'react';

import { styled } from '@shared/ui/theme';
import { TextInput, TouchableOpacity } from 'react-native';
import { Icons } from '../../atoms';

// const  = styled(TouchableOpacity)`
//   padding: ${({ theme }) => theme.spacing(2)}px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5px;
//   border: 1px solid;
//   border-radius: 5px;
//   &:hover {
//     box-shadow: 1px 1px 1px thistle;
//   }
// `;

const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#706D76',
})`
  flex: 1;
  position: absolute;
  top: 12px;
  width: 288px;
  padding-left: 13px;
  height: 36px;
  font-size: 18px;
  background: #403a47;
  border: none;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`;

export type TInput = {
  icon: ReactNode;
  onChangeText?: (param: any) => void;
  value?: string;
};

export const InputItem = ({ icon, onChangeText, value }: TInput) => (
  <Container>
    {icon}
    <Input placeholder="Поиск" onChangeText={onChangeText} value={value} />
  </Container>
);
