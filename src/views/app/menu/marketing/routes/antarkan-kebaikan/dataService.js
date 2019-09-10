import api from '@/services/apiService';

const getAntarkanKebaikans = () => {
    return api.get('antarkan-kebaikan');
}

export default {
    getAntarkanKebaikans
}