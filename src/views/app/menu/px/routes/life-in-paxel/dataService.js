import api from '@/services/apiService';

const getLifeinPaxels = () => {
    return api.get('px/life-in-paxel');
}

const getLifeinPaxel = (id) => {
    return api.get('px/life-in-paxel/:id');
}

export default {
    getLifeinPaxels,
    getLifeinPaxel
}