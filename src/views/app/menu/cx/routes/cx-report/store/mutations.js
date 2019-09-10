const mutations = {
    getCxReports: (state, report) => {
        state.report = report;
    },
    getCxReport: (state, report_id) => {
        state.report_id = report_id;
    }
}

export default mutations