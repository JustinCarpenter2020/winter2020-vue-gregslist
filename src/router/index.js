import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'

// @ts-ignore
import HousesPage from '../pages/HousesPage.vue'

// @ts-ignore
import JobsPage from '../pages/JobsPage.vue'

// @ts-ignore
import JobDetails from '../pages/JobDetails.vue'

// @ts-ignore
import HousesDetails from '../pages/HousesDetailsPage.vue'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  }, {
    path: '/houses/:id',
    name: 'HousesDetails',
    component: HousesDetails
  }, {
    path: '/jobs',
    name: 'Jobs',
    component: JobsPage
  }, {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/cars',
    component: null
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
