// src/api.js
import axios from 'axios';
import { API_URL } from './apiConfig';
const api = axios.create({ baseURL: API_URL });
export default api;