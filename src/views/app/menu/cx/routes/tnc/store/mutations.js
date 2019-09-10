const mutations = {
    getTncs: (state, tnc) => {
        state.tnc = tnc;
    },
    getTnc: (state, tnc_id) => {
        state.tnc_id = tnc_id;
    },
    postTnc: (state, new_tnc) => {
        state.tnc.push(new_tnc);
    },
    putTnc: (state, payload) => {
        state.tnc = state.tnc.map(tnc => {
            if (tnc.tnc_id === payload.id) {
                return Object.assign({}, tnc, payload.tncData)
            }
            return tnc
        })
    },
    delTnc(state, id) {
        let index = state.tnc.findIndex(tnc => tnc.tnc_id == id)
        state.tnc.splice(index, 1)
    }
}

export default mutations