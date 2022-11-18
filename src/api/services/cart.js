import { axiosInstance } from "../axios";

export async function addToCart(productId, quantity) {

    try {
        const response = await axiosInstance.post('/order-item', {
            productId,
            quantity,
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        return response;
    }catch (error) {
        console.log(error);
        return error.response;
    }
}

