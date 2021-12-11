import { ComponentProps, Fragment } from 'react';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../typography';
import { TouchableOpacity } from 'react-native';

import { TabBarItem } from '../../molecules';

const Wrapper = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

type TTabBarItemProps = ComponentProps<typeof TabBarItem>;

export type TTabBarList = {
  items: TTabBarItemProps[];
};

export const TabBarList = ({ items }: TTabBarList) => (
  <Wrapper>
    {items.map((item, index) => (
      <Fragment key={index}>
        <TabBarItem {...item} />
      </Fragment>
    ))}
  </Wrapper>
);
