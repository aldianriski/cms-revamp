import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const benefitsModule = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export default benefitsModule
