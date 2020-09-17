import { Materials } from "./Materials";
import { MaterialDetailPage } from "../../../components/Materials/MaterialDetail";

export const routerPage = (path: string) => {
  return [
    {
      url: `${path}`,
      Component: Materials
    },
    {
      url: `${path}/:materialId`,
      Component: MaterialDetailPage
    }
  ];
};
