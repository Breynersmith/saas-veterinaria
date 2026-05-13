import { privateApi } from "../api";

export const getInvoices = async () => {
  const response = await privateApi.get("/invoices/");
  return response.data;
};

export const createInvoice = async (data) => {
  const response = await privateApi.post("/invoices/", data);
  return response.data;
};

export const updateInvoice = async (id, data) => {
  const response = await privateApi.patch(`/invoices/${id}/`, data);
  return response.data;
};

export const deleteInvoice = async (id) => {
  const response = await privateApi.delete(`/invoices/${id}/`);
  return response.data;
};
