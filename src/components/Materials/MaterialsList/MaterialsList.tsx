import React, { memo } from "react";
import { useAtom } from "@reatom/react";
import { materialsAtom } from "../../../page/materials/model";

import { IProps } from "../../../page/materials/ui/types";
import MaterialItem from "../MaterialItem";

const MaterialsList = () => {
  const { data: materials } = useAtom(materialsAtom);

  return (
    <>
      {materials.map(({ id, ...props }: IProps) => (
        <MaterialItem key={id} {...props} />
      ))}
    </>
  );
};

export default memo(MaterialsList);
