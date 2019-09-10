import apiService from '@/services/apiService'

const actions = {
    getJobvacancy({ commit }) {
        apiService.setHeader()
        apiService.get('px/job-vacancy')
            .then(response => {
                commit('getJobvacancy', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions