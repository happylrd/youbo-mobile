import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../view/MainPage'
import HomeView from '../view/HomeView'
import InstantView from '../view/InstantView'
import NotificationView from '../view/NotificationView'
import MyView from '../view/MyView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main',
      component: MainPage,
      children: [
        {
          path: 'home',
          component: HomeView
        },
        {
          path: 'instant',
          component: InstantView
        },
        {
          path: 'notification',
          component: NotificationView
        },
        {
          path: 'my',
          component: MyView
        }
      ]
    }
  ]
})
