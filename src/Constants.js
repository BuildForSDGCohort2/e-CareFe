import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://api.ecare.ml/',
  });
  export default axiosInstance;