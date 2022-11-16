import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://ec2-54-224-50-121.compute-1.amazonaws.com/api/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export default axiosInstance;