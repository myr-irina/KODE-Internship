import { storiesOf } from '@storybook/react-native';

import { MenuItem } from './menu-item';
import { text } from '@storybook/addon-knobs';
import { IconStar } from '../../../icons';

storiesOf('ui/molecules', module).add('menu-item', () => {
  return (
    <MenuItem
      left={<IconStar/>}
      title="Настройки"
      right={<IconStar/>}
      onPress={() => null}
    />
  );
});
