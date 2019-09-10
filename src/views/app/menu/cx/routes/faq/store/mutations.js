const mutations = {

    getFaqs: (state, faq) => {
        state.faq = faq;
    },
    postFaq: (state, new_faq) => {
        state.faq.push(new_faq);
    },
    getFaq: (state, faq_id) => {
        state.faq_id = faq_id;
    },
    putFaq: (state, payload) => {
        state.faq = state.faq.map(faq => {
            if (faq.id === payload.id) {
                return Object.assign({}, faq, payload.FaqData)
            }
            return faq
        })
    },
    delFaq(state, id) {
        let index = state.faq.findIndex(faq => faq.id == id)
        state.faq.splice(index, 1)
    },
    getFaqCategorys: (state, faq_category) => {
        state.faq_category = faq_category;
    },
    getFaqCategory: (state, faq_category_id) => {
        state.faq_category_id = faq_category_id;
    },
    putFaqCategory: (state, payload) => {
        state.faq_category = state.faq_category.map(faq_category => {
            if (faq_category.faq_category_id === payload.id) {
                return Object.assign({}, faq_category, payload.FaqCategoryData)
            }
            return faq_category
        })
    },
    postFaqCategory: (state, new_faq_category) => {
        state.faq_category.push(new_faq_category);
    },
    delFaqCategory(state, id) {
        let index = state.faq_category.findIndex(faq_category => faq_category.faq_category_id == id)
        state.faq_category.splice(index, 1)
    }

}

export default mutations