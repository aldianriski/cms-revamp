import apiService from '@/services/apiService'

const actions = {
    getOnlineTest({ commit }) {
        apiService.setHeader()
        apiService.get('px/online-test')
            .then(response => {
                commit('getOnlineTest', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions