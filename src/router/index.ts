import { createRouter, createWebHistory, Router, RouterOptions } from 'vue-router'
import routes from './routes'
import 'element-plus/lib/theme-chalk/index.css'

const routerConfig: RouterOptions = {
    history: createWebHistory(),
    routes
}

export const router: Router = createRouter(routerConfig)

export default router