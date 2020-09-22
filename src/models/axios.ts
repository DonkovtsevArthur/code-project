import axios, { Method } from "axios";

type IParams = {
  url?: string;
  method?: Method;
};

type IError = {
  status: number;
  message: string;
  data?: any;
};

const AXIOS = axios.create({
  baseURL: process.env && process.env.REACT_APP_MY_JSON,
  timeout: 60000
});

export const $axios = (axiosParams: IParams) => {
  const { url = "", method = "get" } = axiosParams || {};
  let error: IError = { status: 401, message: "" };

  return AXIOS({ url, method })
    .then(({ status, data }) => {
      if (status === 200) {
        return data;
      }
      error = { status, message: data.error };
      throw error;
    })
    .catch(({ response, message }) => {
      const data = response?.data;
      const status = response?.error;

      if (!error) {
        error = { status, message, data };
      }
      return Promise.reject(error);
    });
};
