import React from "react";
import { Link } from "react-router-dom";
import {
  MenuList,
  MenuItem,
  IconUser,
  IconList,
  IconArchive,
  MenuDivider
} from "sancho";

import { MenuStyle } from "./style";

const Menu: React.FC = () => {
  return (
    <MenuStyle className="MenuList-example">
      <MenuList>
        <Link to="/list">
          <MenuItem contentBefore={<IconList />}>
            {/* List</Link> */}
            List
          </MenuItem>
        </Link>
        <Link to="/materials">
          <MenuItem contentBefore={<IconArchive />}>Materials</MenuItem>
        </Link>
        <MenuDivider />
        <Link to="/profile">
          <MenuItem contentBefore={<IconUser />}>ProfileArthur</MenuItem>
        </Link>
      </MenuList>
    </MenuStyle>
  );
};
export default Menu;
