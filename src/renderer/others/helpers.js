import settings from 'electron-settings'

import axios from './axios'
import store from '@/store/index'

const addAccessTokenToAxios = () => {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + settings.get('auth.accessToken');
}

const isAuthenticated = () => {
    return store.getters.isAuthenticated()
}

export default {
    addAccessTokenToAxios
}