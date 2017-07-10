import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../view/LoginPage'
import RegisterPage from '../view/RegisterPage'
import MainPage from '../view/MainPage'
import HomeView from '../view/HomeView'
import ExploreView from '../view/ExploreView'
import NotificationView from '../view/NotificationView'
import MyView from '../view/MyView'
import TweetPublish from '../view/second/TweetPublish'
import CommentPublish from '../view/second/CommentPublish'
import TweetDetail from '../view/second/TweetDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/main/home'
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/main',
      component: MainPage,
      children: [
        {
          path: 'home',
          component: HomeView
        },
        {
          path: 'explore',
          component: ExploreView
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
    },
    {
      path: '/publish/tweet',
      component: TweetPublish
    },
    {
      path: '/publish/comment',
      component: CommentPublish
    },
    {
      path: '/tweet/:id',
      component: TweetDetail
    }
  ]
})
