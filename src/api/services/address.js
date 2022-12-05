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

export async function updateAddress(
    id,
    street,
    zipcode,
    state,
    country
){
    try{
        const response = await axiosInstance.put(
            `/address/${id}`,
            {
                street,
                zipcode,
                state,
                country
            },
            {
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                }
            }
        )
        return response;

    }catch(error){
        return error.response;
    }
}