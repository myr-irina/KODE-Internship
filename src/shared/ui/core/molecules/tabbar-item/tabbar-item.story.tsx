import { storiesOf } from '@storybook/react-native';

import { TabBarItem } from './tabbar-item';
import { text } from '@storybook/addon-knobs';

import { Icons } from '../../atoms';

storiesOf('ui/molecules', module).add('tabbar-item', () => {
  return (
    <TabBarItem
      icon={<Icons.TabBarMain />}
      title={text('title', 'Главная')}     
      onPress={() => null}
    />
  );
});
