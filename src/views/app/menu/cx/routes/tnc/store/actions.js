import apiService from '@/services/apiService'

const actions = {
    getTncs({ commit }) {
        apiService.get('tnc')
            .then(response => {
                commit('getTncs', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    getTnc({ commit }, payload) {
        apiService.get('tnc/' + payload)
            .then(response => {
                commit('getTnc', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    postTnc({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.post('tnc', payload)
                .then(response => {
                    commit('postTnc', payload);
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    putTnc({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.put('tnc/' + payload.id, payload.tncData)
                .then(response => {
                    commit('putTnc', payload)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    delTnc({ commit }, payload) {
        apiService.delete('tnc/' + payload)
            .then(response => {
                commit('delTnc', payload)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

}

export default actions