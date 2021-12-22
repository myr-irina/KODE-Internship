import { useContext, useState } from 'react';
import { Typography } from '../../typography';
import { PaymentByPhoneTemplate } from '../../templates';
import { Image } from 'react-native';
import { InputItem } from '../../molecules';
import { Icons } from '../../atoms';
import { PaymentByPhonetList } from '../../organisms/payment-by-phone-list';
import { Category } from '@shared/data/appdata';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styled } from '@shared/ui/theme';
import { Text } from 'react-native-svg';

const Flex1 = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PaymentDetailsPage = () => {
  return (
    <>
      <Flex1 />
      <Text>Details</Text>
    </>
  );
};
