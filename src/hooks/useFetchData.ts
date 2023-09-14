import { api } from "./useapi";

export const getAllData = async () => {
  const response = await api.get<IDataProps[]>("/products");

  return response.data;
};

export const createPost = async (userData: Pick<IDataProps, "name" | "url" >) => {
  const response = await api.post("/products", userData);

  return response.data;
};
