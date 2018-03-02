import Vue from 'vue'
import Router from 'vue-router'
import settings from 'electron-settings'

import routes from './routes/routes'

Vue.use(Router)

const router = new Router({
	routes: routes
})

export default router
