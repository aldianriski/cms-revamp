import apiService from '@/services/apiService'

const actions = {
    getPxReport({ commit }) {
        apiService.setHeader()
        apiService.get('px/report')
            .then(response => {
                commit('getPxReport', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions