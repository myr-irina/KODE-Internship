import { storiesOf } from '@storybook/react-native';

import { MenuItem } from './menu-item';
import { text } from '@storybook/addon-knobs';

import { Icons } from '../../atoms';

storiesOf('ui/molecules', module).add('menu-item', () => {
  return (
    <MenuItem
      left={<Icons.Settings />}
      title={text('title', 'Настройки')}
      right={<Icons.ChevronRight />}
      onPress={() => null}
    />
  );
});
