import { ComponentProps } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ProfileTemplate } from '../../templates';
import { ProfileInfo } from '../../molecules';
import { MenuList } from '../../organisms';
import { TabBarList } from '../../organisms';

export type TProfilePage = {
  profileInfo: ComponentProps<typeof ProfileInfo>;
  menu: ComponentProps<typeof MenuList>;
  tabbar: ComponentProps<typeof TabBarList>;
};

export const ProfilePage = ({ profileInfo, menu, tabbar }: TProfilePage) => (
  <ProfileTemplate
    profileInfo={<ProfileInfo {...profileInfo} />}
    menu={<MenuList {...menu} />}
    tabbar={<TabBarList {...tabbar} />}
  />
);
