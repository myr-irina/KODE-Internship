import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { ProfilePage } from './profile-page';
import { Icons } from '../../atoms';

storiesOf('ui/pages', module).add('profile-page', () => {
  return (
    <ProfilePage
      profileInfo={{
        uri: 'https://media.gettyimages.com/photos/closeup-of-thoughtful-young-woman-wearing-eyeglasses-against-neon-picture-id1132601613?s=612x612',
        userName: 'Филипп Ребийяр Олегович',
        phone: '+7 (951) *** - ** - 24',
      }}
      menu={{
        items: [
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
        ],
      }}
    />
  );
});
