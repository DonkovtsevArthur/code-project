import { Materials } from "./materials";
import { MaterialDetailPage } from "./materialDetail";

export const routerPage = (path: string) => {
  return [
    {
      url: `${path}`,
      component: Materials
    },
    {
      url: `${path}/:materialId`,
      component: MaterialDetailPage
    }
  ];
};
