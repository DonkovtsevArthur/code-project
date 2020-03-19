import React, { useEffect } from "react";
import { useAtom, useAction } from "@reatom/react";

import { WrapperMaterialStyle } from "./style";

import { MaterialItem } from "./materialItem";
import { materialsAtom, materialFetch } from "../model";
import { IProps } from "./types";

export const Materials = () => {
  const { data: materials } = useAtom(materialsAtom);
  const fetchMaterials = useAction(materialFetch);

  useEffect(() => {
    fetchMaterials();
  }, []);

  return (
    <WrapperMaterialStyle>
      {materials.map(({ id, ...props }: IProps) => (
        <MaterialItem key={id} {...props} />
      ))}
    </WrapperMaterialStyle>
  );
};
