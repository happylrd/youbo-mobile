// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: {
    color: 'cyan',
    hue: '500',
    textColor: 'white'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
