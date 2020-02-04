import React from "react";

import { WrapperMaterialStyle } from "./style";

import { MaterialItem } from "./materialItem";
import { materials } from "./mock";

export const Materials = () => {
  return (
    <WrapperMaterialStyle>
      {materials.map(({ id, ...props }) => (
        <MaterialItem key={id} {...props} />
      ))}
    </WrapperMaterialStyle>
  );
};
