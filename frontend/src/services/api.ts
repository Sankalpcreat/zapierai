import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000', // Base URL for backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors for requests or responses (optional)
api.interceptors.request.use(
  (config) => {
    // Add any authorization token here if required
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
