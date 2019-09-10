import api from '@/services/apiService';

const getHomePages = () => {
    return api.get('home-page');
}

const getHomePage = (id) => {
    return api.get('home-page/:id');
}

export default {
    getHomePages,
    getHomePage
}