import { publicApi, privateApi } from "../api";

export const getClients = async () => {
  const response = await privateApi.get("/clients/");
  return response.data;
};

export const createClient = async (data) => {
  console.log("TOKEN:", localStorage.getItem("access"));
  const res = await privateApi.post("/clients/", data);
  return res.data;
};
