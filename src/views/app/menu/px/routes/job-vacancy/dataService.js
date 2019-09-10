import api from '@/services/apiService';

const getJobVacancys = () => {
    return api.get('px/job-vacancy');
}

const getJobVacancy = (id) => {
    return api.get('px/job-vacancy/:id');
}

export default {
    getJobVacancys,
    getJobVacancy
}