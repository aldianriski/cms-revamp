import Vue from 'vue';
import Vuex from 'vuex';
import apiService from '@/services/apiService';
import { TokenService } from '@/services/storageService'

import cxModule from '../views/app/menu/cx/routes/cx-report/store/index'
import TncModule from '../views/app/menu/cx/routes/tnc/store/index'
import FaqModule from '../views/app/menu/cx/routes/faq/store/index'

import AntarkanModule from '../views/app/menu/marketing/routes/antarkan-kebaikan/store/index'
import HeadlineModule from '../views/app/menu/marketing/routes/headline/store/index'
import homepageModule from '../views/app/menu/marketing/routes/homepage/store/index'

import benefitsModule from '../views/app/menu/px/routes/benefits/store/index'
import jobVacancyModule from '../views/app/menu/px/routes/job-vacancy/store/index'
import lifeInPaxelModule from '../views/app/menu/px/routes/life-in-paxel/store/index'
import onlineTestModule from '../views/app/menu/px/routes/online-test/store/index'
import testimonialModule from '../views/app/menu/px/routes/testimonial/store/index'
import pxReportModule from '../views/app/menu/px/routes/report/store/index'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cxModule,
    AntarkanModule,
    TncModule,
    FaqModule,
    HeadlineModule,
    homepageModule,
    benefitsModule,
    jobVacancyModule,
    lifeInPaxelModule,
    onlineTestModule,
    testimonialModule,
    pxReportModule
  },
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
  },
  actions: {
    destroyToken(context) {
      apiService.setHeader()

      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          apiService.post('logout', {
            access_token: context.getters.loggedIn
          })
            .then(response => {
              TokenService.removeToken()
              TokenService.removeRefreshToken()
              apiService.removeHeader()
              context.commit('destroyToken')
              resolve(response)
              console.log(response);
              // context.commit('addTodo', response.data)
            })
            .catch(error => {
              TokenService.removeToken()
              TokenService.removeRefreshToken()
              apiService.removeHeader()
              context.commit('destroyToken')
              console.log(error);
              reject(error)
            })
        })
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        apiService.post('login', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {

            TokenService.saveToken(response.data.data)
            context.commit('retrieveToken', response.data.data)
            resolve(response)
            // console.log(response);
            // context.commit('addTodo', response.data)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
  },
});
