import apiService from '@/services/apiService'

const actions = {
    getDonatur({ commit }) {
        apiService.get('antarkan-kebaikan')
            .then(response => {
                commit('getDonatur', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions