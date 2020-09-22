import React, { useEffect } from "react";
import { useAtom, useAction } from "@reatom/react";

import { WrapperMaterialStyle } from "./style";

import { materialsAtom, materialFetch } from "../model";

import { Preloader } from "../../../components/preloader";
import { ErrorMessage } from "../../../components/errorMessage";
import MaterialsList from "../../../components/Materials/MaterialsList";

export const Materials = () => {
  const { data: materials, isLoading, error } = useAtom(materialsAtom);
  const fetchMaterials = useAction(materialFetch);
  useEffect(() => {
    if (materials.length === 0) {
      fetchMaterials();
    }
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <WrapperMaterialStyle>
      {error ? <ErrorMessage /> : <MaterialsList />}
    </WrapperMaterialStyle>
  );
};
