import apiService from '@/services/apiService'

const actions = {
    getLifeInPaxels({ commit }) {
        apiService.setHeader()
        apiService.get('px/life-in-paxel')
            .then(response => {
                commit('getLifeInPaxels', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    getLifeInPaxel({ commit }, payload) {
        apiService.setHeader()
        apiService.get('px/life-in-paxel/' + payload)
            .then(response => {
                commit('getLifeInPaxel', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    postLifeInPaxel({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.post('px/life-in-paxel', payload)
                .then(response => {
                    commit('postLifeInPaxel', payload);
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    putLifeInPaxel({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.put('px/life-in-paxel/' + payload.id, payload.formData)
                .then(response => {
                    commit('putLifeInPaxel', payload)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    delLifeInPaxel({ commit }, payload) {
        apiService.delete('px/life-in-paxel/' + payload)
            .then(response => {
                commit('delLifeInPaxel', payload)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default actions