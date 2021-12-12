import { ComponentProps, Fragment } from 'react';
import { styled } from '@shared/ui/theme';

import { TouchableOpacity } from 'react-native';

import { TabBarItem } from '../../molecules';

const Wrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

type TTabBarItemProps = ComponentProps<typeof TabBarItem>;

export type TTabBarList = {
  items: TTabBarItemProps[];
};

export const TabBarList = ({ items }: TTabBarList) => (
  <Wrapper>
    {items.map(item => (
      <TabBarItem {...item} key={item.title} />
    ))}
  </Wrapper>
);
