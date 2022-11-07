import axiosInstance from '../axios';

export async function signIn(email, password) {
  try {
    const response = await axiosInstance.post('/auth/token', {
      email,
      password,
    });
    return response;
  } catch (error) {
    return error.response;
  }
}