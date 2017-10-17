import Vue from 'vue'
import Router from 'vue-router'
import Charts from '@/components/Charts'
import ChartsType from '@/components/ChartsType'
import Right from '@/components/Right'

Vue.use(Router);

export default new Router({
    mode : 'history',
    routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        requireAuth : true,
      },
      component: Right
    }
  ]
})
