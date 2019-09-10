import apiService from '@/services/apiService'

const actions = {
    getBenefits({ commit }) {
        apiService.setHeader()
        apiService.get('px/benefits')
            .then(response => {
                commit('getBenefits', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    getBenefit({ commit }, payload) {
        apiService.get('px/benefits/' + payload)
            .then(response => {
                commit('getBenefit', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    postBenefit({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.post('px/benefits', payload)
                .then(response => {
                    commit('postBenefit', payload);
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    putBenefit({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.put('px/benefits/' + payload.id, payload.formData)
                .then(response => {
                    commit('putBenefit', payload)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    delBenefit({ commit }, payload) {
        apiService.delete('px/benefits/' + payload)
            .then(response => {
                commit('delBenefit', payload)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default actions