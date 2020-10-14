<template>
	<div id="app">
		<component :is="layout">
			<router-view></router-view>
		</component>
	</div>
</template>

<script>
	export default {
		name: 'App',
		computed: {
			layout() { return (this.$route.meta.layout || 'empty') + '-layout' }
		},
		components: {
			MainLayout: () => import('@/layouts/MainLayout'),
			EmptyLayout: () => import('@/layouts/EmptyLayout'),
			AuthLayout: () => import('@/layouts/AuthLayout')
		}
	}
</script>

<style lang="scss">
</style>
