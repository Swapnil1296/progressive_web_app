import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config before sending it
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // You can modify the response data before returning it
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // Handle response error
    if (!navigator.onLine) {
      // Handle offline scenario
      console.log("You are offline!");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
