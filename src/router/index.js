import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import TestFourView from '../views/TestFourView'
import NameOneView from '../views/NameOneView'
import NameTwoView from '../views/NameTwoView'
import NameThreeView from '../views/NameThreeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test-1',
    name: 'test1',
    component: () => import(/* webpackChunkName: "test1" */ '../views/TestOneView.vue'),
    beforeEnter: (to, from, next) => {
      console.log("before route to IN Test #1:")
      console.log(to)
      console.log("before route from IN Test #1:")
      console.log(from)
      next()
    }
  },
  {
    path: '/test-2/:id/:slug',
    name: 'test2',
    component: () => import(/* webpackChunkName: "test2" */ '../views/TestTwoView.vue')
  },
  {
    path: '/test-3/:id',
    name: 'test3',
    component: () => import(/* webpackChunkName: "test3" */ '../views/TestThreeView.vue'),
    children: [
      {
        path: 'users',
        name: 'test3users',
        component: () => import(/* webpackChunkName: "test3users" */ '../views/TestThreeChildOneView.vue'),
      },
      {
        path: 'tasks/:taskid',
        name: 'test3tasks',
        component: () => import(/* webpackChunkName: "test3tasks" */ '../views/TestThreeChildTwoView.vue'),
      },
      {
        path: ':userid/profile',
        name: 'test3profile',
        component: () => import(/* webpackChunkName: "test3profile" */ '../views/TestThreeChildThreeView.vue'),
      }
    ]
  },
  {
    path: '/test-4/:slug/:id?',
    name: 'test4',
    components: {
      default: TestFourView,
      primary: NameOneView,
      secondary: NameTwoView,
      justincase: NameThreeView
    }
  },
  {
    path: '/prop-route-1/:id/:name',
    name: 'prop1',
    props: true,
    component: () => import(/* webpackChunkName: "prop1" */ '../views/PropOneView.vue')
  },
  {
    path: '/route-coding',
    name: 'routecode',
    component: () => import(/* webpackChunkName: "routecode" */ '../views/RouteImageView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'nav-active'
})

router.beforeEach((to, from, next) => {
  console.log("before route to:")
  console.log(to)
  console.log("before route from:")
  console.log(from)
  next()
});

router.afterEach((to, from) => {
  console.log("after route to:")
  console.log(to)
  console.log("after route from:")
  console.log(from)
})

export default router
