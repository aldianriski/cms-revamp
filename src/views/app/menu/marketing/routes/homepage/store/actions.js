import apiService from '@/services/apiService'

const actions = {
    getHomepage({ commit }) {
        apiService.setHeader()
        apiService.get('home-page')
            .then(response => {
                commit('getHomepage', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions