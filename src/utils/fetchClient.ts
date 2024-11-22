import axios from "axios";

// Create an Axios instance with default configuration
const fetchClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api", // Default API base URL
  timeout: 10000, // Request timeout (10 seconds)
});

// Interceptors for request logging or adding headers
fetchClient.interceptors.request.use(
  (config) => {
    // Modify config (e.g., add authorization header)
    console.log(`Requesting: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptors for response logging or error handling
fetchClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default fetchClient;
