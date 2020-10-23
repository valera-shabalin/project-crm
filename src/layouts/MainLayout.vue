<template>
  <div class="main-layout">
    <TheSidebar :class="{ 'open': sidebar }"/>
    <div class="main-layout__body">
      <TheHeader @toggleSidebar="sidebar = !sidebar"/>
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
		  TheHeader: () => import('@/components/main/TheHeader'),
      TheSidebar: () => import('@/components/main/TheSidebar')
    }
	}
</script>

<style lang="scss">
  .main-layout {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    overflow: hidden;
    &__body {
      height: 100%;
      flex-grow: 1;
    }
  }
</style>