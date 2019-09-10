const getters = {
    faqs: state => {
        return state.faq;
    },
    faq: state => {
        return state.faq_id;
    },
    faq_categorys: state => {
        return state.faq_category;
    },
    faq_category: state => {
        return state.faq_category_id;
    }
}

export default getters