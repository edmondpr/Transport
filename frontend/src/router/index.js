import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Bilete from '@/components/Bilete'
import Abonamente from '@/components/Abonamente'
import DatePersonale from '@/components/DatePersonale'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/bilete',
      name: 'Bilete',
      component: Bilete
    },
    {
      path: '/abonamente',
      name: 'Abonamente',
      component: Abonamente
    },
    {
      path: '/date-personale',
      name: 'DatePersonale',
      component: DatePersonale
    }       
  ]
})
