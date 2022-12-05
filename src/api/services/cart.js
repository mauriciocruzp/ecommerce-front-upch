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

export async function getCart() {
    try {
        const response = await axiosInstance.get('/order/user', {
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

export async function updateCart(id, quantity) {
    try {
        const response = await axiosInstance.put(`/order-item/${id}`, {
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

export async function deleteCartItem(id) {
    try {
        const response = await axiosInstance.delete(`/order-item/${id}`, {
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