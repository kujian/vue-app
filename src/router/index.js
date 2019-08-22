import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import vIf from '@/components/v-if'
import vee from '@/components/vee'

import VueResource from 'vue-resource'





Vue.use(Router)

Vue.use(VueResource);


export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/v-if',
    name: 'v-if',
    component: vIf
  }, {
    path: '/vee',
    name: 'vee',
    component: vee
  }]
})