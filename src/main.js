import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')



