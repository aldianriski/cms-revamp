const mutations = {

    getBenefits: (state, benefits) => {
        state.benefits = benefits;
    },
    getBenefit: (state, benefits_id) => {
        state.benefits_id = benefits_id;
    },
    postBenefit: (state, new_benefits) => {
        state.benefits.push(new_benefits);
    },
    putBenefit: (state, payload) => {
        state.benefits = state.benefits.map(benefits => {
            if (benefits.benefits_id === payload.id) {
                return Object.assign({}, benefits, payload.formData)
            }
            return benefits
        })
    },
    delBenefit(state, id) {
        let index = state.benefits.findIndex(benefits => benefits.benefits_id == id)
        state.benefits.splice(index, 1)
    }

}

export default mutations