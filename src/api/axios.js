import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://ec2-34-233-135-46.compute-1.amazonaws.com/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});