import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		authenticated: false,
		user: {
			id: '',
			username: '',
			firstName: '',
			lastName: '',
			permissions: null,
			roles: null,
		}
	},
	getters: {
		isAuthenticated (state) {
			return state.authenticated
		}
	},
	mutations: {
		userData (state, userData) {
			state.user = userData
		}
	},
	strict: process.env.NODE_ENV !== 'production'
})
