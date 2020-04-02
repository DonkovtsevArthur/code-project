import React from "react";
import { NavLink } from "react-router-dom";
import { MenuList, MenuItem, MenuDivider } from "sancho";

import { MenuStyle } from "./style";
import { menuList } from "./helpers";

const Menu: React.FC = () => {
  return (
    <MenuStyle>
      <MenuList>
        {menuList.map(({ to, Icon, title }) => {
          return (
            <React.Fragment key={title}>
              {title === "Profile" && <MenuDivider />}
              <NavLink to={to}>
                <MenuItem className="menu-item" contentBefore={<Icon />}>
                  {title}
                </MenuItem>
              </NavLink>
            </React.Fragment>
          );
        })}
      </MenuList>
    </MenuStyle>
  );
};
export default Menu;
