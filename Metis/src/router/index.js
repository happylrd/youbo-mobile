import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import * as types from '../store/mutations'
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

Vue.use(VueRouter)

const routes = [
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
        component: HomeView,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'explore',
        component: ExploreView,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'notification',
        component: NotificationView,
        meta: {
          requireAuth: true
        }
      },
      {
        path: 'my',
        component: MyView,
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/publish/tweet',
    component: TweetPublish,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/publish/comment',
    component: CommentPublish,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/tweet/:id',
    component: TweetDetail
  }
]

if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.state.token) {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
