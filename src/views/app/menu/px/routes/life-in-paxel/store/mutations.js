const mutations = {

    getLifeInPaxels: (state, lifeinpaxel) => {
        state.lifeinpaxel = lifeinpaxel;
    },
    getLifeInPaxel: (state, lifeinpaxel_id) => {
        state.lifeinpaxel_id = lifeinpaxel_id;
    },
    postLifeInPaxel: (state, new_lifeinpaxel) => {
        state.lifeinpaxel.push(new_lifeinpaxel);
    },
    putLifeInPaxel: (state, payload) => {
        state.lifeinpaxel = state.lifeinpaxel.map(lifeinpaxel => {
            if (lifeinpaxel.lifeinpaxel_id === payload.id) {
                return Object.assign({}, lifeinpaxel, payload.formData)
            }
            return lifeinpaxel
        })
    },
    delLifeInPaxel(state, id) {
        let index = state.lifeinpaxel.findIndex(lifeinpaxel => lifeinpaxel.lifeinpaxel_id == id)
        state.lifeinpaxel.splice(index, 1)
    }

}

export default mutations