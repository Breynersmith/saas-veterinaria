import { publicApi, privateApi } from "../api";

export const getPets = async () => {
  const response = await privateApi.get("/pets/");
  return response.data;
};

export const createPets = async (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] !== null && data[key] !== "") {
      formData.append(key, data[key]);
    }
  });

  const response = await privateApi.post("/pets/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
