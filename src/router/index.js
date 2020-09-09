import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import homepage1 from '../components/homepage1.vue'
import homepage2 from '../components/homepage2.vue'
import homepage3 from '../components/homepage3.vue'
import homepage4 from '../components/homepage4.vue'
import homepage5 from '../components/homepage5.vue'
import homepage6 from '../components/homepage6.vue'
import homepage7 from '../components/homepage7.vue'
import homepage8 from '../components/homepage8.vue'
import homepage9 from '../components/homepage9.vue'
import homepage10 from '../components/homepage10.vue'
import homepage11 from '../components/homepage11.vue'
import homepage12 from '../components/homepage12.vue'
import homepage13 from '../components/homepage13.vue'
import homepage14 from '../components/homepage14.vue'
import homepage15 from '../components/homepage15.vue'
import xg from '../components/xg.vue'
import qqq from '../components/qqq.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/Home',
		name: 'Home',
		component: Home
	}, {
		path: '/',
		name: 'homepage1',
		component: homepage1,
		meta:{
			Login:false
		}
	}, {
		path: '/homepage2',
		name: 'homepage2',
		component: homepage2,
		meta:{
			Login:localStorage.getItem('userName')
		}
	}, {
		path: '/homepage3',
		name: 'homepage3',
		component: homepage3
	}, {
		path: '/homepage4',
		name: 'homepage4',
		component: homepage4
	}, {
		path: '/homepage5',
		name: 'homepage5',
		component: homepage5
	}, {
		path: '/homepage6',
		name: 'homepage6',
		component: homepage6
	},
	{
		path: '/homepage7',
		name: 'homepage7',
		component: homepage7
	}, {
		path: '/homepage8',
		name: 'homepage8',
		component: homepage8
	}, {
		path: '/homepage9',
		name: 'homepage9',
		component: homepage9
	}, {
		path: '/homepage10',
		name: 'homepage10',
		component: homepage10
	},{
		path: '/homepage11',
		name: 'homepage11',
		component: homepage11
	},{
		path: '/homepage12',
		name: 'homepage12',
		component: homepage12
	},{
		path: '/homepage13',
		name: 'homepage13',
		component: homepage13
	},{
		path: '/homepage14',
		name: 'homepage14',
		component: homepage14
	},{
		path: '/homepage15',
		name: 'homepage15',
		component: homepage15
	},{
		path: '/xg',
		name: 'xg',
		component: xg
	},{
		path: '/qqq',
		name: 'qqq',
		component: qqq
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode:"hash",
	base:process.env.BASE_URL,
	routes
})

export default router
