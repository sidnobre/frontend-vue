import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Loja from './components/Loja.vue'
import Produto from './components/Produto.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {main: Loja}
    },
    {
      path: '/loja',
      components: {
        main: Loja
      } 
    },
    {
      path: '/produto',
      components: {
        main: Produto
      }
    }
  ]
})

Vue.config.productionTip = false

Vue.component('loja', {})

new Vue({
          router,
          render: h => h(App)
       }).$mount('#app')