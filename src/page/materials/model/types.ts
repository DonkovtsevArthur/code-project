import { success } from "./actions";

export enum TypeActions {
  success = "materialsSuccess",
  request = "materialsRequest",
  error = "materialsError"
}

export type Materials = {
  id: string;
  title: string;
  description: string;
  date: Date;
  img: string;
};

export type IMaterials = {
  materials: Materials[];
};

export type IState = {
  data: Materials[];
  error: string;
  isLoading: boolean;
};
