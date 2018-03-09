import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://dev.justcodingtv.com/api',
});

export default axiosInstance