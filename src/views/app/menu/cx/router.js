import cxReport from './routes/cx-report/cxReport.vue';
import cxDetailComplaint from "./routes/cx-report/component/detailComplaint.vue";
import cxDetailClaim from "./routes/cx-report/component/detailClaim.vue";
import cxDetailFeedback from "./routes/cx-report/component/detailFeedback.vue";
import cxDetailInformation from "./routes/cx-report/component/detailInformation.vue";

import Faq from './routes/faq/Faq.vue';
import createFaq from './routes/faq/routes/createFaq.vue';
import editFaq from './routes/faq/routes/editFaq.vue';
import createFaqCategory from './routes/faq/routes/createFaqCategory.vue';
import editFaqCategory from './routes/faq/routes/editFaqCategory.vue';

import Tnc from './routes/tnc/Tnc.vue';
import createTnc from './routes/tnc/component/createTnc.vue';
import editTnc from './routes/tnc/component/editTnc.vue';

const cxRoutes = [
    {
        path: '/cx_report',
        name: 'cxReport',
        component: cxReport,
    },
    {
        path: '/cx-detail-complaint/:id',
        name: 'cxDetailComplaint',
        component: cxDetailComplaint,
    },
    {
        path: '/cx-detail-claim/:id',
        name: 'cxDetailClaim',
        component: cxDetailClaim,
    },
    {
        path: '/cx-detail-feedback/:id',
        name: 'cxDetailFeedback',
        component: cxDetailFeedback,
    },
    {
        path: '/cx-detail-information/:id',
        name: 'cxDetailInformation',
        component: cxDetailInformation,
        props: true
    },
    {
        path: '/faq',
        name: 'Faq',
        component: Faq,
    },
    {
        path: '/create-faq-category',
        name: 'createFaqCategory',
        component: createFaqCategory,
    },
    {
        path: '/edit-faq-category/:id',
        name: 'editFaqCategory',
        component: editFaqCategory,
    },
    {
        path: '/create-faq',
        name: 'createFaq',
        component: createFaq,
    },
    {
        path: '/edit-faq/:id',
        name: 'editFaq',
        component: editFaq,
    },
    {
        path: '/tnc',
        name: 'Tnc',
        component: Tnc,
    },
    {
        path: '/create-tnc',
        name: 'createTnc',
        component: createTnc,
    },
    {
        path: '/edit-tnc/:id',
        name: 'editTnc',
        component: editTnc,
    },
];

export default cxRoutes;
