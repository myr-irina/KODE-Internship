import { storiesOf } from '@storybook/react-native';

import { text } from '@storybook/addon-knobs';

import { Icons } from '../../atoms';
import { InputItem } from '.';

storiesOf('ui/molecules', module).add('input', () => {
  return <InputItem icon={<Icons.SearchIcon />} />;
});
