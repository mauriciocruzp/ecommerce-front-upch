import { axiosInstance } from "../axios";

export async function createProduct(formData) {
  try {
    const response = await axiosInstance.post("/product", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export async function getListProduct() {
  const response = axiosInstance.get("/product");

  return response;
}

export async function getProductById(id) {
  const response = axiosInstance.get(`/product/${id}`);

  return response;
}