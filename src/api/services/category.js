import { axiosInstance } from "../axios";

export const getCategories = async () => {
    return await axiosInstance.get('/category')
};