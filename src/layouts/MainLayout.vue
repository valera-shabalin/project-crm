<template>
	<div class="main-layout">
    <Sidebar />
    <div class="main-layout__body">
      <Header />
      <router-view></router-view>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'MainLayout',
    components: {
		  Header: () => import('@/components/main/Header'),
      Sidebar: () => import('@/components/main/Sidebar')
    }
	}
</script>

<style lang="scss">
  .main-layout {
    &__body {

    }
  }
</style>