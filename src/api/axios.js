import axios from "axios";

export const BASE_URL = `http://dev3.dansmultipro.co.id/api`;

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;