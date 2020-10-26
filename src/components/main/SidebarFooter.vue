<template>
  <div class="sidebar__footer">
    <Notifications :notifications="true"/>
    <router-link to="/settings"><SvgSettings/></router-link>
    <SvgLogout @click="logout"/>
  </div>
</template>

<script>
export default {
  name: 'SidebarFooter',
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
    Notifications: () => import('@/components/items/Notifications'),
    SvgSettings: () => import('@/components/svg/SvgSettings'),
    SvgLogout: () => import('@/components/svg/SvgLogout')
  }
}
</script>

<style lang="scss" scoped>
  .sidebar__footer {
    display: none;
    justify-content: center;
    svg, .notifications {
      margin: 0 15px;
    }
  }
  @media (max-width: 576px) {
    .sidebar__footer {
      display: flex;
    }
  }
</style>