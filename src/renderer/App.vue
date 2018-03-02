<template>
	<div id="app">
		<sidebar></sidebar>
		<navigation />

		<div class="ui stackable grid container">
			<router-view />
		</div>
	</div>
</template>

<script>
	import layoutSidebar from '@/components/Layout/Sidebar.vue'
	import layoutNavigation from '@/components/Layout/Navigation.vue'

	export default {
		name: 'justcodingtv-electron',
		components: {
			'sidebar': layoutSidebar,
			'navigation': layoutNavigation,
		},
		beforeCreate () {
			if (this.$settings.has('auth.token')) {
				this.$http.get('/auth/check')
					.then((response) => {

					}).catch((response) => {
						this.$settings.set('auth.token', null)
					})
			} else {
				this.$router.push({ name: 'auth.login' })
			}
		}
	}
</script>

<style>
	/* SEMANTIC UI */
    @import "./assets/semantic/dist/semantic.css";
</style>
