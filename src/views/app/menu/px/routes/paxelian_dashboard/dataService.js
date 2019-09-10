import api from '@/services/apiService';

const getReports = () => {
    return api.get('px/report');
}

const getReport = (id) => {
    return api.get('px/report/:id');
}

export default {
    getReports,
    getReport
}