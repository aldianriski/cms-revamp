import api from '@/services/apiService';

const getOnlineTests = () => {
    return api.get('px/online-test');
}

const getOnlineTest = (id) => {
    return api.get('px/online-test/:id');
}

export default {
    getOnlineTests,
    getOnlineTest
}