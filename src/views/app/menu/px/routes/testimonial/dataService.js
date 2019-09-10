import api from '@/services/apiService';

const getTestimonials = () => {
    return api.get('px/testimonial');
}

const getTestimonial = (id) => {
    return api.get('px/testimonial/:id');
}

export default {
    getTestimonials,
    getTestimonial
}