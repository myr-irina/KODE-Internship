import { storiesOf } from '@storybook/react-native';

import { ProfileInfo } from './profile-info';
import { text } from '@storybook/addon-knobs';

storiesOf('ui/molecules', module).add('profile-info', () => {
  return (
    <ProfileInfo
      uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBeFyYoxaofHZu2vvmqkoPfloakoULyXO1_A&usqp=CAU"
      userName={text('userName', 'Филипп Ребийяр Олегович')}
      phone={text('phone', '+7 (951) *** - ** - 24')}
    />
  );
});
