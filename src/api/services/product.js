import axiosInstance from "../axios";

export async function getListProduct() {

    const response = axiosInstance.get('/product');

    return response;
}