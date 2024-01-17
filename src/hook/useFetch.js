import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const postData = async (endpoint, data, headers = {}) => {
    try {
        const response = await api.post(endpoint, data, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getData = async (endpoint, params = {}, headers = {}) => {
    try {
        const response = await api.get(endpoint, { params, headers });
        return response;
    } catch (error) {
        throw error;
    }
};
