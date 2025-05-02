import { API_URL } from "@/constants/api";

import axios from "axios";

const configAxios = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

configAxios.interceptors.response.use((response) => response);

export default configAxios;
