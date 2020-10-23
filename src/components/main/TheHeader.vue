<template>
  <header class="header d-flex align-items-center justify-content-between">
    <div class="header__hamburger">
      <SvgHamburger :color="'#222B45'" @click="$emit('toggleSidebar')"/>
    </div>
    <div class="header__tools">
      <Notifications :notifications="true"/>
      <SvgSettings @click="$router.push('/settings')"/>
    </div>
  </header>
</template>

<script>
  import Notifications from "@/components/items/Notifications";
  export default {
    name: 'TheHeader',
    components: {
      SvgHamburger: () => import('@/components/svg/SvgHamburger'),
      Notifications: () => import('@/components/items/Notifications'),
      SvgSettings: () => import('@/components/svg/SvgSettings')
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    padding: 20px 30px;
    box-shadow: 8px 4px 10px 2px #FAFAFA;
    &__hamburger {
      cursor: pointer;
    }
    &__tools {
      cursor: pointer;
    }
  }
</style>