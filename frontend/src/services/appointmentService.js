import { publicApi, privateApi } from "../api";

export const getAppointments = async () => {
  const response = await privateApi.get("/appointments/");
  return response.data;
};

export const createAppointment = async (data) => {
  const response = await privateApi.post("/appointments/", data)
  return response.data
}

export const updateAppointment = async (id, data) => {
  const response = await privateApi.put(`/appointments/${id}/`, data)
  return response.data
}

export const deleteAppointment = async (id) => {
  const response = await privateApi.delete(`/appointments/${id}/`)
  return response.data
}
