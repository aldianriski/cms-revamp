import api from '@/services/apiService';

const getArticles = () => {
    return api.get('article');
}

const getArticle = (id) => {
    return api.get('article/:id');
}

export default {
    getArticles,
    getArticle
}