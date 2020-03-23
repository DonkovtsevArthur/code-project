import React, { useEffect } from "react";
import { useAtom, useAction } from "@reatom/react";

import { WrapperMaterialStyle } from "./style";

import { MaterialItem } from "./materialItem";
import { materialsAtom, materialFetch } from "../model";
import { IProps } from "./types";
import { Preloader } from "../../../preloader";
import { ErrorMessage } from "../../../errorMessage";

export const Materials = () => {
  const { data: materials, isLoading, error } = useAtom(materialsAtom);
  const fetchMaterials = useAction(materialFetch);

  useEffect(() => {
    materials.length === 0 && fetchMaterials();
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <WrapperMaterialStyle>
      {error ? (
        <ErrorMessage />
      ) : (
        materials.map(({ id, ...props }: IProps) => (
          <MaterialItem key={id} {...props} />
        ))
      )}
    </WrapperMaterialStyle>
  );
};
