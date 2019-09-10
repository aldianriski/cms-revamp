import apiService from '@/services/apiService'

const actions = {
    getCxReports({ commit }) {
        apiService.setHeader()
        apiService.get('cx')
            .then(response => {
                commit('getCxReports', response.data.data)
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    },
    getCxReport({ commit }, payload) {
        //this.$route.params.id
        apiService.setHeader()
        apiService.get('cx/' + payload)
            .then(response => {
                commit('getCxReport', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
}

export default actions
