import { ComponentProps, Fragment } from 'react';

import { MenuItem } from '../../molecules';

type TMenuItemProps = ComponentProps<typeof MenuItem>;

export type TMenuList = {
  items: TMenuItemProps[];
};

export const MenuList = ({ items }: TMenuList) => (
  <>
    {items.map((item, index) => (
      <Fragment key={index}>
        <MenuItem {...item} />
      </Fragment>
    ))}
  </>
);
