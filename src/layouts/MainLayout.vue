<template>
  <div class="main-layout">
    <TheSidebar :class="{ 'open': menu }" @close="menu = false"/>
    <div class="main-layout__body">
      <TheHeader @toggleSidebar="menu = !menu"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'MainLayout',
    data: () => ({
      menu: false
    }),
    methods: {
      async logout() {
        try {
          await this.$store.dispatch('LOGOUT')
          this.$popup('Вы вышли из системы')
          this.$router.push('/login')
        } catch(err) {
          this.$popup('Неизвестная ошибка')
        }
      }
    },
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
      overflow: auto;
      .header {
        margin-bottom: 10px;
      }
    }
  }
</style>