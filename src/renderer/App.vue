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
			
		}
	}
</script>

<style>
	/* SEMANTIC UI */
    @import "./assets/semantic/dist/semantic.css";
</style>
