import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage.vue'
import QuestionsList from './components/QuestionsList.vue'
import HealthStatus from './components/HealthStatus.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            name: 'home',
            component: HomePage
        },
        {
            path:'/questions',
            name: 'questions',
            component: QuestionsList
        },
        {
            path: '/status',
            name: 'status',
            component: HealthStatus
        }
    ]
})