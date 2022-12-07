import { axiosInstance } from "../axios";

export const updateOrder = async (id, status) => {
  try {
    const response = await axiosInstance.post(`/order/${id}`, {
        orderStatusId: status,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};