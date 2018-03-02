import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://dev.justcodingtv.com/api',
});

export default axiosInstance