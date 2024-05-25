import axios from 'axios';

const API_BASE_URL = 'https://example.com/api';

export const registerWithAPI = async () => {
    const response = await axios.post(${ API_BASE_URL } / register, { /* registration data */ });
    return response.data;
};

export const fetchProducts = async () => {
    const response = await axios.get(${ API_BASE_URL } / products);
    return response.data;
};

export const fetchProductById = async (id) => {
    const response = await axios.get(${ API_BASE_URL } / product / ${ id });
    return response.data;
};