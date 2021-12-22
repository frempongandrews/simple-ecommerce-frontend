import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/v1`,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => {
    // console.log("***********Res in interceptor", res);
    return res;
  },
  (err) => {
    console.log("**********Error in interceptor", err.response);
    return err.response;
  }
);

export const getProducts = async () => {
  try {
    return await api.get("/products");
  } catch (err) {
    return err.response;
  }
};

export const getProductById = async (id) => {
  try {
    return await api.get(`/products/${id}`);
  } catch (err) {
    return err.response;
  }
};
