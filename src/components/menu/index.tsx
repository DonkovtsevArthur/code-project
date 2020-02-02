import React from "react";
import { Link } from "react-router-dom";
import {
  MenuList,
  MenuItem,
  IconUser,
  IconList,
  IconInstagram,
  IconPackage,
  IconHome,
  MenuDivider
} from "sancho";

import { MenuStyle } from "./style";

const Menu: React.FC = () => {
  return (
    <MenuStyle className="MenuList-example">
      <MenuList>
        <Link to="/profile">
          <MenuItem contentBefore={<IconUser />}>ProfileArthur</MenuItem>
        </Link>
        <Link to="/list">
          <MenuItem contentBefore={<IconList />}>
            {/* List</Link> */}
            List
          </MenuItem>
        </Link>
        <Link to="/test">
          <MenuItem contentBefore={<IconHome />}>Moments</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem contentBefore={<IconInstagram />}>Promote Mode</MenuItem>
        <MenuItem contentBefore={<IconPackage />} contentAfter="⌘A">
          Analytics
        </MenuItem>
      </MenuList>
    </MenuStyle>
  );
};
export default Menu;
