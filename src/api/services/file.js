import axios from 'axios';

export async function uploadFile(formData) {
  try {
    const response = await axios.post('http://127.0.0.1:8080/api/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}
