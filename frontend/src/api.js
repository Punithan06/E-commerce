import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const getCategories = () => axios.get(`${API_BASE_URL}/categories/`);
export const getProducts = (params) => axios.get(`${API_BASE_URL}/products/`, { params });
export const getProductById = (id) => axios.get(`${API_BASE_URL}/products/${id}/`);
export const getCategoryById = (id) => axios.get(`${API_BASE_URL}/categories/${id}/`);
