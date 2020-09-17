export interface Materials {
  id: string;
  title: string;
  description: string;
  date: Date;
  img: string;
}

export interface IMaterials {
  materials: Materials[];
}

export interface IState {
  data: Materials[];
  error: string;
  isLoading: boolean;
}
