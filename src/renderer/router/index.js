import Vue from 'vue'
import Router from 'vue-router'
import settings from 'electron-settings'

import routes from './routes/routes'
import store from '@/store/index.js'
import axios from '@/others/axios'
import helpers from '@/others/helpers'

Vue.use(Router)

/**
 * Setting Vue Router
 */
const router = new Router({
	routes: routes
})

/**
 * Before each route
 */
router.beforeEach((to, from, next) => {
	/**
	 * Checks if the settings has the auth token
	 */
	if (settings.has('auth.accessToken')) {
        /**
         * Get the access token from the settings file and add it to axios
         */
        helpers.addAccessTokenToAxios()

        /**
         * This will check if the access token is still valid
         */
        axios.get('/auth/check')
            .then((response) => {
                /**
                 * Updates the user info in Vuex
                 */
				store.commit('userData', response.data)
				
				/**
				 * Continue to the requested page
				 */
				next()
            }).catch((response) => {
                /**
                 * Token is not valid anymore
                 * Resets token
                 */
                settings.set('auth.accessToken', null)

                if (to.name !== 'auth.login') {
					/**
					 * Check if the user is wanting to vist the register page
					 */
					if (to.name === 'auth.register') {
						next()
					} else {
						/**
						 * Redirects to the login page
						 */
						next({ name: 'auth.login' })
					}
				} else {
					next()
				}
            })
    } else {
		if (to.name !== 'auth.login') {
			/**
			 * Check if the user is wanting to vist the register page
			 */
			if (to.name === 'auth.register') {
				next()
			} else {
				/**
				 * Redirects to the login page
				 */
				next({ name: 'auth.login' })
			}
		} else {
			next()
		}
    }
})

export default router
