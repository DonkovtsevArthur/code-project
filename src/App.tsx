import React from "react";
import { jsx } from "@emotion/core";
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

const App: React.FC = () => {
  return (
    <div className="MenuList-example">
      <MenuList>
        <MenuItem contentBefore={<IconUser />} onPress={() => alert("Hello 1")}>
          ProfileArthur
        </MenuItem>
        <MenuItem contentBefore={<IconList />} component="a" href="#">
          Lists
        </MenuItem>
        <MenuItem contentBefore={<IconHome />}>Moments</MenuItem>
        <MenuDivider />
        <MenuItem contentBefore={<IconInstagram />}>Promote Mode</MenuItem>
        <MenuItem contentBefore={<IconPackage />} contentAfter="⌘A">
          Analytics
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default App;
