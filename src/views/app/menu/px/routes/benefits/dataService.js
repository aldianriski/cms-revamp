import api from '@/services/apiService';

const getBenefits = () => {
  return api.get('px/benefits');
}

const getBenefit = (id) => {
  return api.get('px/benefits/:id');
}

export default {
  getBenefits,
  getBenefit
}