import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { MenuList } from './menu-list';
import { Icons } from '../../atoms';

storiesOf('ui/organisms', module).add('menu-list', () => {
  return (
    <MenuList
      items={[
        {
          title: 'Настройки',
          left: <Icons.Settings />,
          right: <Icons.ChevronRight />,
          onPress: () => null,
        },
        {
          title: 'Тема приложения',
          left: <Icons.Moon />,
          right: <Icons.ChevronRight />,
          onPress: () => null,
        },
        {
          title: 'Служба поддержки',
          left: <Icons.Phone />,
          onPress: () => null,
        },
        {
          title: 'Выход',
          left: <Icons.Exit />,
          onPress: () => null,
        },
      ]}
    />
  );
});
