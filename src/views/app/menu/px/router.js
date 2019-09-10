import pxBenefits from './routes/benefits/index.vue';
import createBenefits from './routes/benefits/component/createbenefits.vue';
import editBenefits from './routes/benefits/component/editbenefits.vue';

import pxJobVacancy from './routes/job-vacancy/index.vue';
import createJobVacancy from './routes/job-vacancy/component/createjobvacancy.vue';
import editJobVacancy from './routes/job-vacancy/component/editjobvacancy.vue';

import pxLifeInPaxel from './routes/life-in-paxel/index.vue';
import createLifeInPaxel from './routes/life-in-paxel/component/createlifeinpaxel.vue';
import editLifeInPaxel from './routes/life-in-paxel/component/editlifeinpaxel.vue';

import pxOnlineTest from './routes/online-test/index.vue';
import createOnlineTest from './routes/online-test/component/createonlinetest.vue';
import editOnlineTest from './routes/online-test/component/editonlinetest.vue';

import pxReport from './routes/report/index.vue';
import pxDashboard from './routes/paxelian_dashboard/index.vue';
import pxHired from './routes/hired_paxelian/index.vue';
import detailCandidate from './routes/report/component/detailCandidate.vue';

import pxHero from './routes/hero/index.vue';
import pxHeroDasboard from './routes/hero_dashboard/index.vue';
import pxHeroHired from './routes/hired_heroes/index.vue';
import detailCandidateHero from './routes/hero/component/detailCandidate.vue';

import pxTestimonial from './routes/testimonial/index.vue';
import createTestimonial from './routes/testimonial/component/createtestimonial.vue';
import editTestimonial from './routes/testimonial/component/edittestimonial.vue';

const pxRoutes = [
  {
    path: 'px-hero-hired',
    name: 'pxHeroHired',
    component: pxHeroHired,
  },
  {
    path: 'px-hero-dashboard',
    name: 'pxHeroDasboard',
    component: pxHeroDasboard,
  },
  {
    path: 'px-hired',
    name: 'pxHired',
    component: pxHired,
  },
  {
    path: 'px-dashboard',
    name: 'pxDashboard',
    component: pxDashboard,
  },
  {
    path: 'benefits',
    name: 'pxBenefits',
    component: pxBenefits,
  },
  {
    path: 'create-benefits',
    name: 'createBenefits',
    component: createBenefits,
  },
  {
    path: 'edit-benefits/:id',
    name: 'editBenefits',
    component: editBenefits,
  },
  {
    path: 'job-vacancy',
    name: 'pxJobVacancy',
    component: pxJobVacancy,
  },
  {
    path: 'create-job-vacancy',
    name: 'createJobVacancy',
    component: createJobVacancy,
  },
  {
    path: 'edit-job-vacancy/:id',
    name: 'editJobVacancy',
    component: editJobVacancy,
  },
  {
    path: 'life-in-paxel',
    name: 'pxLifeInPaxel',
    component: pxLifeInPaxel,
  },
  {
    path: 'create-life-in-paxel',
    name: 'createLifeInPaxel',
    component: createLifeInPaxel,
  },
  {
    path: 'edit-life-in-paxel/:id',
    name: 'editLifeInPaxel',
    component: editLifeInPaxel,
  },
  {
    path: 'online-test',
    name: 'pxOnlineTest',
    component: pxOnlineTest,
  },
  {
    path: 'create-online-test',
    name: 'createOnlineTest',
    component: createOnlineTest,
  },
  {
    path: 'edit-online-test/:id',
    name: 'editOnlineTest',
    component: editOnlineTest,
  },
  {
    path: 'report',
    name: 'pxReport',
    component: pxReport,
  },
  {
    path: 'detail-candidate/:id',
    name: 'detailCandidate',
    component: detailCandidate,
  },
  {
    path: 'px-hero',
    name: 'pxHero',
    component: pxHero,
  },
  {
    path: 'detail-candidate-hero/:id',
    name: 'detailCandidateHero',
    component: detailCandidateHero,
  },
  {
    path: 'testimonial',
    name: 'pxTestimonial',
    component: pxTestimonial,
  },
  {
    path: 'create-testimonial',
    name: 'createTestimonial',
    component: createTestimonial,
  },
  {
    path: 'edit-testimonial/:id',
    name: 'editTestimonial',
    component: editTestimonial,
  },
];

export default pxRoutes;
