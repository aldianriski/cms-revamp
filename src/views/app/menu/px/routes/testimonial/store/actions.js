import apiService from '@/services/apiService'

const actions = {
    getTestimonials({ commit }) {
        apiService.setHeader()
        apiService.get('px/testimonial')
            .then(response => {
                commit('getTestimonials', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    getTestimonial({ commit }, payload) {
        apiService.get('px/testimonial/' + payload)
            .then(response => {
                commit('getTestimonial', response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    },
    postTestimonial({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.post('px/testimonial', payload)
                .then(response => {
                    commit('postTestimonial', payload);
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    putTestimonial({ commit }, payload) {
        return new Promise((resolve, reject) => {
            apiService.put('px/testimonial/' + payload.id, payload.formData)
                .then(response => {
                    commit('putTestimonial', payload)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        });
    },
    delTestimonial({ commit }, payload) {
        apiService.delete('px/testimonial/' + payload)
            .then(response => {
                commit('delTestimonial', payload)
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default actions