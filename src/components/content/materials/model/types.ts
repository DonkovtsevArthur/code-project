export interface IMaterials {
  id: string;
  title: string;
  description: string;
  date: Date;
  img: string;
}

export interface IState {
  data: IMaterials[];
  error: string;
  isLoading: boolean;
}
