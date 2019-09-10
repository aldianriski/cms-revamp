import antarkanKebaikan from './routes/antarkan-kebaikan/antarkanKebaikan.vue';

import homePage from './routes/homepage/homePage.vue';
import createHomePage from './routes/homepage/component/createHomePage.vue';
import editHomePage from './routes/homepage/component/editHomePage.vue';

import Headline from './routes/headline/Headline.vue';
import createHeadline from './routes/headline/component/createHeadline.vue';
import editHeadline from './routes/headline/component/editHeadline.vue';

const marketingRoutes = [
    {
        path: '/antarkan-kebaikan',
        name: 'antarkanKebaikan',
        component: antarkanKebaikan,
    },
    {
        path: '/home-page',
        name: 'homePage',
        component: homePage,
    },
    {
        path: '/create-home-page',
        name: 'createHomePage',
        component: createHomePage,
    },
    {
        path: '/edit-home-page/:id',
        name: 'editHomePage',
        component: editHomePage,
    },
    {
        path: '/headline',
        name: 'Headline',
        component: Headline,
    },
    {
        path: '/create-headline',
        name: 'createHeadline',
        component: createHeadline,
    },
    {
        path: '/edit-headline/:id',
        name: 'editHeadline',
        component: editHeadline,
    },
];

export default marketingRoutes;
