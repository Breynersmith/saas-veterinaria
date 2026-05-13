import { publicApi, privateApi } from "../api";


export const login = async (username, password) => {
  const response = await publicApi.post("/auth/login/", {
    username,
    password,
  });

  localStorage.setItem("access", response.data.access);
  localStorage.setItem("refresh", response.data.refresh);

  return response.data;
};


export const getMe = async () => {
  const response = await privateApi.get("/auth/me/");
  return response.data;
};


export const register = async (data) => {
  const response = await publicApi.post("/auth/register/", data);
  return response.data;
};
