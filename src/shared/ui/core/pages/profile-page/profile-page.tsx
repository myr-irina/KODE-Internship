import { ComponentProps } from 'react';

import { ProfileTemplate } from '../../templates';
import { ProfileInfo } from '../../molecules';
import { MenuList } from '../../organisms';

export type TProfilePage = {
  profileInfo: ComponentProps<typeof ProfileInfo>;
  menu: ComponentProps<typeof MenuList>;
};

export const ProfilePage = ({ profileInfo, menu }: TProfilePage) => (
  <ProfileTemplate
    profileInfo={<ProfileInfo {...profileInfo} />}
    menu={<MenuList {...menu} />}
  />
);
