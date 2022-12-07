import { axiosInstance } from '../axios';

export async function createProduct(
  title,
  description,
  price,
  stock,
  imageUrl,
  categoryIds,
  productStatusId
) {
  try {
    const response = await axiosInstance.post(
      '/product',
      {
        title,
        description,
        price,
        stock,
        imageUrl,
        categoryIds,
        productStatusId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export async function updateProduct(
  id,
  title,
  description,
  price,
  stock,
  imageUrl,
  categoryIds,
  productStatusId
) {
  try {
    const response = await axiosInstance.put(
      `/product/${id}`,
      {
        title,
        description,
        price,
        stock,
        imageUrl,
        categoryIds,
        productStatusId,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
}

export async function getListProduct() {
  const response = axiosInstance.get('/product');

  return response;
}

export async function getProductById(id) {
  try {
    const response = await axiosInstance.get(`/product/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}

export async function searchByKeyword(keyword) {
  const response = axiosInstance.get(`/product/?keyword=${keyword}`);

  return response;
}
