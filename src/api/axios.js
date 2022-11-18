import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});