import apiService from '@/services/apiService'

const actions = {
    getFaqs({ commit }) {
        apiService.setHeader()
        apiService.get('faq')
            .then(response => {
                commit('getFaqs', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    postFaq({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.post('faq', payload)
                .then(response => {
                    commit('postFaq', payload);
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    getFaq({ commit }, payload) {
        apiService.setHeader()
        apiService.get('faq/' + payload)
            .then(response => {
                commit('getFaq', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    putFaq({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.put('faq/' + payload.id, payload.FaqData)
                .then(response => {
                    commit('putFaq', payload)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    delFaq({ commit }, payload) {
        apiService.delete('faq/' + payload)
            .then(response => {
                commit('delFaq', payload)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    },
    getFaqCategorys({ commit }) {
        apiService.setHeader()
        apiService.get('faq_category')
            .then(response => {
                commit('getFaqCategorys', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    getFaqCategory({ commit }, payload) {
        apiService.setHeader()
        apiService.get('faq_category/' + payload)
            .then(response => {
                commit('getFaqCategory', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    putFaqCategory({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.put('faq_category/' + payload.id, payload.FaqCategoryData)
                .then(response => {
                    commit('putFaqCategory', payload)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    postFaqCategory({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.post('faq_category', payload)
                .then(response => {
                    commit('postFaqCategory', payload);
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    delFaqCategory({ commit }, payload) {
        apiService.delete('faq_category/' + payload)
            .then(response => {
                commit('delFaqCategory', payload)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default actions