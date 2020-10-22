<template>
	<div class="main-layout d-flex align-items-center">
    <Sidebar :open="sidebar" />
    <div class="main-layout__body">
      <Header @toggleMenu="sidebar = !sidebar" />
      <router-view></router-view>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'MainLayout',
    data: () => ({
      sidebar: false
    }),
    components: {
		  Header: () => import('@/components/main/Header'),
      Sidebar: () => import('@/components/main/Sidebar')
    }
	}
</script>

<style lang="scss">
  .main-layout {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    &__body {
      height: 100%;
      flex-grow: 1;
      flex-basis: 100%;
    }
  }
</style>