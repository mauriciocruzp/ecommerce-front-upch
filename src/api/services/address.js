import { axiosInstance } from "../axios";

export async function createAddress(
    street,
    zipcode,
    state,
    country
){
    try{
        const response = await axiosInstance.post("/address",{
            street,
            zipcode,
            state,
            country,
        },
        {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            }
        }
        );
        return response;
    } catch(error){
        return error.response;
    }
}