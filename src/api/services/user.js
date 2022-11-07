import { axiosInstance } from "../axios";

export async function createUser(
    email,
    password,
    firstName,
    lastName,
    dateOfBirth
  ) {
    try {
      const response = await axiosInstance.post('/user', {
        email,
        password,
        firstName,
        lastName,
        dateOfBirth,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }