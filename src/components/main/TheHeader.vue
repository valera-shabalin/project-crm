<template>
  <header class="header">
    <div class="header__hamburger">
      <SvgHamburger :color="'#222B45'" @click="$emit('toggleSidebar')"/>
    </div>
    <div class="header__tools">
      <Notifications :notifications="true"/>
      <router-link to="/settings"><SvgSettings/></router-link>
      <SvgLogout @click="logout"/>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'TheHeader',
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
      SvgHamburger: () => import('@/components/svg/SvgHamburger'),
      Notifications: () => import('@/components/items/Notifications'),
      SvgSettings: () => import('@/components/svg/SvgSettings'),
      SvgLogout: () => import('@/components/svg/SvgLogout')
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 8px 4px 10px 2px #FAFAFA;
    &__hamburger {
      cursor: pointer;
    }
    &__tools {
      cursor: pointer;
      svg {
        margin-left: 15px;
      }
    }
  }
  @media (max-width: 576px) {
    .header {
      padding: 15px;
    }
  }
</style>