const getters = {
    reports: state => {
        return state.report;
    },
    report: state => {
        return state.report_id;
    }
}

export default getters