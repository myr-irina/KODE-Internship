import React, { ReactNode, useState } from 'react';

import { styled } from '@shared/ui/theme';
import { TextInput, TouchableOpacity } from 'react-native';

// const Wrapper = styled(TouchableOpacity)`
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
`;

// const Input = styled.TextInput.attrs({
//   placeholderTextColor: 'red',
// })`
//   flex: 1 0;
//   min-width: 50px;
//   min-height: 25px;
//   background-color: transparent;
//   padding-left: 5px;
//   background-color: '#000';
//   font-size: 18px;
//   margin: 10px;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
//   &:focus {
//     outline: none;
//   }
// `;

const Input = styled.TextInput`
  width: 100%;
  height: 60px;
  font-size: 18px;
  flex: 1;
  color: #010101;
  margin-left: 10px;
`;

export type TInput = {
  icon: ReactNode;
};

export const InputItem = ({ icon }: TInput) => (
  <Container>
    <Input placeholder="Поиск" />
    {icon}
  </Container>
);
