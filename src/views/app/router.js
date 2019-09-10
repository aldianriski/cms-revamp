import Dashboard from './menu/dashboard/Dashboard.vue';
import Profile from './menu/profile/Profile.vue';

import Px from './menu/px/Px.vue';
import pxRoutes from './menu/px/router';

import Marketing from './menu/marketing/Marketing.vue';
import marketingRoutes from './menu/marketing/router';

import Cx from './menu/cx/Cx.vue';
import cxRoutes from './menu/cx/router';

const appRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/px',
    name: 'px',
    component: Px,
    children: pxRoutes,
  },
  {
    path: '/marketing',
    name: 'marketing',
    component: Marketing,
    children: cxRoutes,
  },
  {
    path: '/cx',
    name: 'cx',
    component: Cx,
    children: marketingRoutes,
  },


];
export default appRoutes;
