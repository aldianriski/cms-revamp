const mutations = {

    getTestimonials: (state, testimonial) => {
        state.testimonial = testimonial;
    },
    getTestimonial: (state, testimonial_id) => {
        state.testimonial_id = testimonial_id;
    },
    postTestimonial: (state, new_testimonial) => {
        state.testimonial.push(new_testimonial);
    },
    putTestimonial: (state, payload) => {
        state.testimonial = state.testimonial.map(testimonial => {
            if (testimonial.id === payload.id) {
                return Object.assign({}, testimonial, payload.formData)
            }
            return testimonial
        })
    },
    delTestimonial(state, id) {
        let index = state.testimonial.findIndex(testimonial => testimonial.id == id)
        state.testimonial.splice(index, 1)
    }

}

export default mutations