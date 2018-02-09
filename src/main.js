import 'es6-promise/auto';
import Vue from 'vue';
import App from './app';
import router from './router';
import store from './vuex/store';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import api from './api/index.js';
import './assets/iconfont/iconfont.css'
import lodash from 'lodash'

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

Vue.use(Vuex);
Vue.use(ElementUI);


router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next()
    } else {
        let token = localStorage.getItem('accessToken');
        if (token) {
            // let  breadcrumbList  = [];
            // breadcrumbList.push(from.meta);
            // breadcrumbList.push(to.meta);
            //fromBreadcrumbList.concat(toBreadcrumbList);
            //breadcrumbList.concat({ label: '主页' })
            //store.dispatch('setBreadcrumbUpdate', breadcrumbList)
            // api.drProfile().then(res => {
            //     store.dispatch('addUserProfile', res.data);
            // }).catch(err => {
            //     console.log('main.js医生信息网络请求有问题');
            // })
            next();
        } else {
            // if (to.path === '/login') {
            //     localStorage.removeItem('token');
            //   next();
            // } else {
            //   next({ path: '/login' });
            // }

            next({
                path: "/login"
            });
        }
    }
})


new Vue({ // eslint-disable-line
  el: '#app',
  router: router,
  store,
  render: h => h(App)
});
