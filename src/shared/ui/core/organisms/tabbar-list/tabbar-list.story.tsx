import { storiesOf } from '@storybook/react-native';

import { TabBarList } from './tabbar-list';
import { Icons } from '../../atoms';

storiesOf('ui/organisms', module).add('tabbar-list', () => {
  return (
    <TabBarList
      items={[
        {
          title: 'Настройки',
          icon: <Icons.TabBarMain />,         
          onPress: () => null,
        },
        {
          title: 'Платежи',
          icon: <Icons.TabBarPayment />,         
          onPress: () => null,
        },
        {
          title: 'Банкоматы',
          icon: <Icons.TabBarBank />,
          onPress: () => null,
        },
        {
          title: 'Профиль',
          icon: <Icons.TabBarProfile />,
          onPress: () => null,
        },
      ]}
    />
  );
});
