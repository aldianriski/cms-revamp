import apiService from '@/services/apiService'

const actions = {
    getHeadlines({ commit }) {
        apiService.setHeader()
        apiService.get('article')
            .then(response => {
                commit('getHeadlines', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions