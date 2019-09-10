import api from '@/services/apiService';

const getFaqs = () => {
    return api.get('faq');
}

const getFaq = (id) => {
    return api.get('faq/:id');
}
const getFaqCategorys = () => {
    return api.get('faq_category');
}

const getFaqCategory = (id) => {
    return api.get('faq_category/:id');
}

export default {
    getFaqs,
    getFaq,
    getFaqCategorys,
    getFaqCategory
}